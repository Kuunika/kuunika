import actions from '../actions/actions';

const initialState = {
  activePage: 'clinical'
};
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
    default:
      return state;
  }
};
