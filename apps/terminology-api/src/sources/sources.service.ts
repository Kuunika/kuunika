import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Source, Category, CategoryFromOCL, ConceptFromOCL } from '@kuunika/terminology-interfaces';
import { SearchService } from '../search/search.service';
import { OclService } from '../ocl/ocl.service';
require('dotenv').config();

@Injectable()
export class SourcesService {

  constructor(private readonly searchService: SearchService, private readonly oclService: OclService) {}

  async getSource(sourceId: string, pageNumber = 1, filterTerm?: string): Promise<Source> {
    const categoryFromOCL =  await this.oclService.requestCategoryFromOcl(sourceId);
    const { data, ...payload} =  await this.oclService.requestAllConceptsFromCategory(categoryFromOCL.extras.Route, pageNumber);

    if(filterTerm !== '') {
      return {
        ...payload,
        ...await this.filterConcepts(categoryFromOCL, data, filterTerm)
      };
    }
    
    return {
      ...payload,
      ...await this.createSourceObject(categoryFromOCL, data),
    };

  }

  private filterConcepts(categoryFromOCL: CategoryFromOCL, conceptsFromOCL: ConceptFromOCL[], filterTerm: string) {

    const conceptsHeadings  = this.createConceptHeadings(categoryFromOCL.extras.Table);
    const searchableList    = this.searchService.buildSearchableLists(conceptsFromOCL, conceptsHeadings);
    const filteredTermsId   = this.searchService.searchConcepts(searchableList, conceptsHeadings, filterTerm).map(filtered => filtered.id);
    const filteredConcepts  = conceptsFromOCL.filter(concept => filteredTermsId.includes(concept.id));

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
        if (field.toLowerCase().includes('name') || field.toLowerCase().includes('term')) {
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
