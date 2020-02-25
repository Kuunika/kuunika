import { SearchResult } from './search-result.interface';

export interface SearchCategory {
    categoryTitle: string;
    searchResults: SearchResult[];
}