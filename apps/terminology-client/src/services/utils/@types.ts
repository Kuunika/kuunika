export interface UIState {
  activePage: string;
}

export interface IData {
  categories: Array<{
    categoryTitle: string;
    id: null | string | number;
    categories: Array<any>;
  }>;
}

export interface State {
  ui: UIState;
  data: IData;
  errors: Array<any>;
  loading: Array<any>;
}
