import actions from "./actions";

export const setActivePage = (activePage: string) => {
  return {
    type: actions.setActivePage,
    payload: activePage
  };
};
