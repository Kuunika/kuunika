export interface UIState {
  activePage: string;
}

export interface Category {
  categoryTitle: string;
  id: null | string | number;
  categories: Array<Category>;
}

export interface CategoryData {
  sourceHeadings: Array<string>;
  results: Array<any>;
  formatedData?: Array<any>;
}

export interface ISearchCategory {
  breadcrumbCategory: string;
  numberOfResults: number | string;
  sourceId: string;
  searchTerm?: string;
}
export interface ISearch {
  searchTerm: string;
  searchCategories: Array<ISearchCategory>;
}
export interface Concept {
  id: number | string | null;
  headings: Array<{ title: string; value: string }>;
  descriptions: Array<{ title: string; value: string }>;
  breadcrumb: string;
}
export interface IData {
  categories: Array<Category>;
  categoryData: { [key: string]: CategoryData };
  concept: { [key: string]: Concept };
  search: ISearch;
}

export interface State {
  ui: UIState;
  data: IData;
  errors: any;
  loading: any;
}
