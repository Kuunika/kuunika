import actions from '../actions/actions';
import { UIState } from '../../utils/@types';

const initialState = {
  activePage: 'clinical',
  searchResults: false
} as UIState;
export default (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case actions.setActivePage:
      return {
        ...state,
        activePage: action.payload
      };
    case actions.setSearchResultsState:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};
