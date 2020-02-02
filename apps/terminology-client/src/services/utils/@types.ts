export interface UIState {
  activePage: string;
}

export interface IData {
  categories: Array<{
    categoryTitle: string;
    id: null | string | number;
    categories: Array<any>;
  }>;
  categoryData: Object;
  concept: {
    breadcrumb: string;
    headings: Array<Object>;
    descriptions: Array<Object>;
    id: string;
  };
}

export interface State {
  ui: UIState;
  data: IData;
  errors: Array<any>;
  loading: Array<any>;
}
