import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as axios from 'axios';
import { Source, Category } from '@kuunika/terminology-interfaces';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';
import { ConceptFromOCL } from '../ocl-interfaces/concept-from-ocl.interface';
require('dotenv').config();

@Injectable()
export class SourcesService {
  async getSource(sourceId: string): Promise<Source> {
    const oclCategoriesUrl =
    process.env.OCL_API +
    process.env.OCL_CATEGORIES_API_URL +
      `concepts?p=${sourceId}` +
      '&verbose=true&limit=0';

    const axiosRequestForCategories = await this.requestCategoriesFromOcl(
      oclCategoriesUrl
    );

    if (axiosRequestForCategories.status === 200) {
      const category = this.categoryExists(
        axiosRequestForCategories.data,
        sourceId
      );
      const oclConceptsSourceUrl =
        process.env.OCL_API +
        category.extras.Route +
        'concepts?verbose=true&limit=0';

      const conceptsFromOCL = (await this.requestConceptsFromOcl(
        oclConceptsSourceUrl
      )).data;

      return this.createSourceObject(category, conceptsFromOCL);
    } else {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  private async requestCategoriesFromOcl(oclCategoriesUrl: string) {
    return await axios.default.get<CategoryFromOCL[]>(oclCategoriesUrl, {
      headers: {
        Authorization: process.env.OCL_API_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  private async requestConceptsFromOcl(oclConceptsSourceUrl: string) {
    return await axios.default.get<ConceptFromOCL[]>(oclConceptsSourceUrl, {
      headers: {
        Authorization: process.env.OCL_API_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  categoryExists(
    categories: CategoryFromOCL[],
    sourceId: string
  ): CategoryFromOCL {
    const categoryFromOCL = categories.find(
      category => category.id === sourceId
    );

    if (categoryFromOCL) {
      return categoryFromOCL;
    } else {
      throw new HttpException(
        {
          error: 'Source Not Found',
          status: 404
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  async createSourceObject(
    category: CategoryFromOCL,
    conceptFromOCL: ConceptFromOCL[]
  ): Promise<Source> {
    const sourceHeadings = this.creatSourceHeadings(category);
    const results = this.buildResultsForSourcesObject(
      conceptFromOCL,
      sourceHeadings
    );
    return {
      sourceHeadings,
      results,
      breadcrumb: category.extras.Route
    };
  }

  creatSourceHeadings(categoryFromOCL: CategoryFromOCL): string[] {
    return categoryFromOCL.extras.Table.split(',').map(category =>
      category.trim()
    );
  }

  buildResultsForSourcesObject(
    conceptFromOCL: ConceptFromOCL[],
    sourceHeadings: string[]
  ): any[] {
    //TODO: This method needs extensive tests
    //TODO: Refactor variable names to something more consistent
    return conceptFromOCL.map(concept => {
      const result = {};
      for (const field of sourceHeadings) {
        if (field.toLowerCase().includes('name')) {
          result[field] = concept.names.find(
            name => name.name_type === field
          ).name;
        }

        if (field.toLowerCase().includes('description')) {
          result[field] = concept.descriptions.find(
            description => description.description_type === field
          ).description;
        }

        if (
          concept.hasOwnProperty(field) &&
          typeof concept[field] !== 'object'
        ) {
          result[field] = concept[field];
        } else if (concept.extras.hasOwnProperty(field)) {
          result[field] = concept.extras[field];
        }
      }
      return result;
    });
  }
}
