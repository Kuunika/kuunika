import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Source, Category, CategoryFromOCL, ConceptFromOCL } from '@kuunika/terminology-interfaces';
import { RedisSingleton } from "@kuunika/redis-connection";
import { SearchService } from '../search/search.service';
import { OclService } from '../ocl/ocl.service';
require('dotenv').config();

@Injectable()
export class SourcesService {

  constructor(private readonly searchService: SearchService, private readonly oclService: OclService) {}

  async getSource(sourceId: string, filterTerm?: string): Promise<Source> {
    let categoryFromOCL;
    let conceptsHeadings;
    let conceptsFromOCL;

    if(RedisSingleton.getInstance().connected){
      categoryFromOCL = await this.getCategoryFromCache(sourceId);
      conceptsFromOCL =  await this.getConceptsFromCache(categoryFromOCL.extras.Route);
    }else{
      console.log('connection to redis failed now making request to OCL');
      categoryFromOCL = await this.oclService.requestCategory(sourceId);
      conceptsFromOCL =  await this.oclService.requestAllConceptsFromCategory(categoryFromOCL.extras.Route);
    }
    
    if(filterTerm !== '') {
      conceptsHeadings = this.createConceptHeadings(categoryFromOCL.extras.Table);
      return this.filterConcepts(categoryFromOCL, conceptsFromOCL, conceptsHeadings, filterTerm);

    }
    return this.createSourceObject(categoryFromOCL, conceptsFromOCL);
    
  }

  async getCategoryFromCache(field: string): Promise<CategoryFromOCL>{
    const category = await RedisSingleton.convertHgetToObject<CategoryFromOCL>('categories', field);
    if (category === null) {
      throw new HttpException({
        error: 404,
        errorMessage: 'Source Category Not Found',
      },HttpStatus.NOT_FOUND);
    }

    return category;
    
  }

  getConceptsFromCache(key: string){
    return RedisSingleton.convertHvalsToArrayOfObjects<ConceptFromOCL>(key);
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
