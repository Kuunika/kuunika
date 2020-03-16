import actions from './actions';

export const setActivePage = (activePage: string) => {
  return {
    type: actions.setActivePage,
    payload: activePage
  };
};

export const setSearchResultsState = (open: Boolean) => {
  return {
    type: actions.setSearchResultsState,
    payload: open
  };
};
