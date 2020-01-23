import actions from '../actions/actions';
import { IData } from '../../utils/@types';

const initialState = {
  categories: []
} as IData;

export default (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case actions.getCategories + '_FULFILLED':
      return {
        ...state,
        categories: action.payload.data
      };
    default:
      return state;
  }
};
