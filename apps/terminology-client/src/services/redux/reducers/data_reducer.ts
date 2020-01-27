import actions from '../actions/actions';
import { IData } from '../../utils/@types';

const initialState = {
  categories: [],
  categoryData: {
    default: {
      sourceHeadings: [],
      results: []
    }
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
    default:
      return state;
  }
};
