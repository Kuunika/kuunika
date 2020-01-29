import { Injectable } from '@nestjs/common';
import { ConceptFromOCL } from '../ocl-interfaces/concept-from-ocl.interface';
import {
  SearchResult,
  Search,
  SearchCategory
} from '@kuunika/terminology-interfaces';
import * as Fuse from 'fuse.js';
import * as axios from 'axios';
import { CategoryFromOCL } from '../ocl-interfaces/all-categories.interface';
import { OclService } from '../ocl/ocl.service';

@Injectable()
export class SearchService {

  constructor(private readonly oclService: OclService) {}

  async searchAll(searchTerm: string): Promise<Search> {
    const categoriesFromOCL: CategoryFromOCL[] = await this.oclService.requestAllCategories();
    const searchResults: SearchResult[] = await this.buildSearchResultsList(categoriesFromOCL, searchTerm);

    return {
      searchTerm,
      searchResults
    };
  }


  private async buildSearchResultsList(categoriesFromOCL: CategoryFromOCL[], searchTerm: string) {
    const searchResults: SearchResult[] = [];
    for (const category of categoriesFromOCL) {
      const conceptsFromCategory: ConceptFromOCL[] = await this.oclService.requestAllConceptsFromCategory(category.extras.Route);
      searchResults.push(this.buildSearchResult(conceptsFromCategory, category, searchTerm));
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
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
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
      if (heading.toLowerCase().includes('name')) {
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
