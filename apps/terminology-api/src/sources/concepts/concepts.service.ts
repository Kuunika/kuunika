import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConceptFromOCL } from '../../ocl-interfaces/concept-from-ocl.interface';
import { CategoryFromOCL } from '../../ocl-interfaces/all-categories.interface';
import * as axios from 'axios';
require('dotenv').config();

@Injectable()
export class ConceptsService {
  async getConceptDescription(sourceId: string, conceptId: string) {
    const source = await this.getSource(sourceId);
    const concept = await this.getConcept(conceptId, source.extras.Route);
    return this.buildTermDescription(
      concept,
      source.extras.Category,
      source.extras.Details.split(',').map(category => category.trim()
      )
    );
  }

  async getSource(sourceId: string): Promise<CategoryFromOCL> {
    const oclCategoriesUrl =
      process.env.OCL_API +
      process.env.OCL_CATEGORIES_API_URL +
      `concepts?p=${sourceId}` +
      '&verbose=true&limit=0';

    const axiosRequestForCategories = await axios.default.get<
      CategoryFromOCL[]
    >(oclCategoriesUrl, {
      headers: {
        Authorization: process.env.OCL_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    if (axiosRequestForCategories.status !== 200) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    } else if (axiosRequestForCategories.data.length === 0) {
      throw new HttpException('Concept Not Found', HttpStatus.NOT_FOUND);
    } else {
      return axiosRequestForCategories.data[0];
    }
  }

  async getConcept(
    conceptId: string,
    sourceUrl: string
  ): Promise<ConceptFromOCL> {
    const oclCategoriesUrl =
      process.env.OCL_API +
      sourceUrl +
      `concepts/${conceptId}` +
      '?verbose=true&limit=0';
    const axiosRequestForConcept = await axios.default.get<ConceptFromOCL>(
      oclCategoriesUrl,
      {
        headers: {
          Authorization: process.env.OCL_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    if (axiosRequestForConcept.status !== 200) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    } else {
      return axiosRequestForConcept.data;
    }
  }

  buildTermDescription(sourceObject: ConceptFromOCL, breadcrumb: string, headings: string[]) {
    const termDescription = {
        breadcrumb,
        headings: {
            
        },
        descriptions: {

        }
    };
    for (const heading of headings) {
      if (heading.toLowerCase().includes('name')) {
        termDescription.headings[heading] = sourceObject.names.find(
          name => name.name_type === heading
        ).name;
      }

      if (heading.toLowerCase().includes('description')) {
        termDescription.descriptions[
          heading
        ] = sourceObject.descriptions.find(
          description => description.description_type === heading
        ).description;
      }

      if (
        sourceObject.hasOwnProperty(heading) &&
        heading !== 'id' &&
        typeof sourceObject[heading] !== 'object'
      ) {
        termDescription.headings[heading] = sourceObject[heading];
      } else if (sourceObject.extras.hasOwnProperty(heading)) {
        termDescription.headings[heading] = sourceObject.extras[heading];
      } else {
        termDescription[heading] = sourceObject[heading];
      }
    }
    return termDescription;
  }
} 
