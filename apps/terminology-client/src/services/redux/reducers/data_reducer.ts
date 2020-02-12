import actions from '../actions/actions';
import { IData } from '../../utils/@types';

const initialState = {
  categories: [],
  categoryData: {
    default: {
      sourceHeadings: [],
      results: []
    }
  } as Object,
  concept: {
    default: {
      id: null,
      headings: [],
      descriptions: [],
      breadcrumb: ''
    }
  } as Object,
  search: {
    searchTerm: '',
    searchCategories: []
  }
} as IData;

export default (
  state = initialState,
  action: { type: string; payload?: any; meta?: any }
) => {
  switch (action.type) {
    case actions.getCategories + '_FULFILLED':
      return {
        ...state,
        categories: action.payload.data
      };
    case actions.getCategoryData + '_FULFILLED':
      return {
        ...state,
        categoryData: {
          ...state.categoryData,
          [action.meta]: action.payload.data
        }
      };
    case actions.getConcept + '_FULFILLED':
      return {
        ...state,
        concept: {
          ...state.concept,
          [action.meta]: action.payload.data
        }
      };
    case actions.searchConcept + '_FULFILLED':
      return {
        ...state,
        search: action.payload.data
      };
    case actions.setSearchValue:
      return {
        ...state,
        search: {
          searchTerm: action.payload,
          searchCategories:
            action.payload.length == 0 ? [] : state.search.searchCategories
        }
      };
    default:
      return state;
  }
};
