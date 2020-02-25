
import { SearchResult } from './search-result.interface';

export interface Search {
    searchTerm: string;
    searchResults: SearchResult[];
}