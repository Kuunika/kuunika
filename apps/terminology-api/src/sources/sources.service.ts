import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as axios from 'axios';
import { Source, Category } from '@kuunika/terminology-interfaces';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';
import { ConceptFromOCL } from '../ocl-interfaces/concept-from-ocl.interface';
import { SearchService } from '../search/search.service';
import { OclService } from '../ocl/ocl.service';
require('dotenv').config();

@Injectable()
export class SourcesService {

  constructor(private readonly searchService: SearchService, private readonly oclService: OclService) {}

  async getSource(sourceId: string, filterTerm?: string): Promise<Source> {

    const categoryFromOCL = await this.oclService.requestCategory(sourceId);
    const conceptsHeadings = this.createConceptHeadings(categoryFromOCL.extras.Table);
    const conceptsFromOCL = await this.oclService.requestAllConceptsFromCategory(categoryFromOCL.extras.Route)
    
    if(filterTerm !== '') {
      return this.filterConcepts(categoryFromOCL, conceptsFromOCL, conceptsHeadings, filterTerm);
    }
    return this.createSourceObject(categoryFromOCL, conceptsFromOCL);
    
  }

  private filterConcepts(categoryFromOCL: CategoryFromOCL, conceptsFromOCL: ConceptFromOCL[], conceptsHeadings: string[], filterTerm: string) {
    const keys = this.createConceptHeadings(categoryFromOCL.extras.Table);
    const searchableList = this.searchService.buildSearchableLists(conceptsFromOCL, conceptsHeadings);
    const filteredTermsId = this.searchService.searchConcepts(searchableList, keys, filterTerm).map(filtered => filtered.id);
    const filteredConcepts = conceptsFromOCL.filter(concept => filteredTermsId.includes(concept.id));
    return this.createSourceObject(categoryFromOCL, filteredConcepts);
  }

  createConceptHeadings(sourceTable: string):string[]{
    return sourceTable.split(',').map(tableHead => tableHead.trim());
  }

  async createSourceObject(
    category: CategoryFromOCL,
    conceptFromOCL: ConceptFromOCL[]
  ): Promise<Source> {
    const sourceHeadings = this.createConceptHeadings(category.extras.Table);
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


  buildResultsForSourcesObject(
    conceptFromOCL: ConceptFromOCL[],
    sourceHeadings: string[]
  ): any[] {
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
