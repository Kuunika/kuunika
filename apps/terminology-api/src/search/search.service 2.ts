import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {
  SearchResult,
  Search
} from '@kuunika/terminology-interfaces';
import * as Fuse from 'fuse.js';
import { RedisSingleton } from "@kuunika/redis-connection";
import { OclService } from '../ocl/ocl.service';
import { CategoryFromOCL, ConceptFromOCL } from "@kuunika/terminology-interfaces";

@Injectable()
export class SearchService {

  constructor(private readonly oclService: OclService) {}

  async searchAll(searchTerm: string): Promise<Search> {
    if(!RedisSingleton.getInstance().connected) {
      throw new HttpException({
        error: 500,
        errorMessage: 'There is a issue with the server',
      },HttpStatus.INTERNAL_SERVER_ERROR);
    }


    try {
      const categoriesFromOCL: CategoryFromOCL[] = await RedisSingleton.convertHvalsToArrayOfObjects<CategoryFromOCL>('categories');
      const searchResults: SearchResult[] = await this.buildSearchResultsList(categoriesFromOCL, searchTerm);

      if(searchResults.length === 0) throw new HttpException({
        error: 'No Results Found',
        status: 404
      },HttpStatus.NOT_FOUND);

      return {
        searchTerm,
        searchResults
      };
    } catch (error) {
      console.log(error);
      throw new HttpException({

      },HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  private async buildSearchResultsList(categoriesFromOCL: CategoryFromOCL[], searchTerm: string) {
    const searchResults: SearchResult[] = [];
    for (const category of categoriesFromOCL) {
      console.log(category.extras.Route);
      const conceptsFromCategory: ConceptFromOCL[] = await RedisSingleton.convertHvalsToArrayOfObjects<ConceptFromOCL>(category.extras.Route);
      const searchResult = this.buildSearchResult(conceptsFromCategory, category, searchTerm);
      if(searchResult.numberOfResults > 0) searchResults.push(searchResult);
    }
    return searchResults;
  }

  buildSearchResult(
    conceptFromOCL: ConceptFromOCL[],
    categoryFromOCL: CategoryFromOCL,
    searchTerm: string
  ): SearchResult {
    const searchSearchResult: SearchResult = {
      numberOfResults: 0,
      sourceId: categoryFromOCL.id,
      categoryBreadcrumb: categoryFromOCL.extras.Category
    };

    const headings = categoryFromOCL.extras.Details.split(',').map(heading => heading.trim());

    const listOfTermsToSearch = this.buildSearchableLists(
      conceptFromOCL,
      headings
    );

    searchSearchResult.numberOfResults = this.searchConcepts(
      listOfTermsToSearch,
      headings,
      searchTerm
    ).length;

    return searchSearchResult;
  }

  searchConcepts(
    listOfTermsToSearch: any[],
    keys: string[],
    searchTerm: string
  ) {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 50,
      maxPatternLength: 40,
      minMatchCharLength: 20,
      keys
    };
    const fuse = new Fuse(listOfTermsToSearch, options);
    return fuse.search(searchTerm);
  }

  buildSearchableLists(conceptsFromOCL: ConceptFromOCL[], headings: string[]): any[] {
    return conceptsFromOCL.map(concept =>
      this.buildSearchableList(concept, headings)
    );
  }

  buildSearchableList(sourceObject: ConceptFromOCL, headings: string[]) {
    const termDescription = {};
    for (const heading of headings) {
      if (heading.toLowerCase().includes('name')||heading.toLowerCase().includes('term')) {
        termDescription[heading] = sourceObject.names.find(
          name => name.name_type === heading
        ).name;
      }

      if (heading.toLowerCase().includes('description')) {
        termDescription[heading] = sourceObject.descriptions.find(
          description => description.description_type === heading
        ).description;
      }

      if (
        sourceObject.hasOwnProperty(heading) &&
        typeof sourceObject[heading] !== 'object'
      ) {
        termDescription[heading] = sourceObject[heading];
      } else if (sourceObject.extras.hasOwnProperty(heading)) {
        termDescription[heading] = sourceObject.extras[heading];
      }
    }
    return termDescription;
  }
}
