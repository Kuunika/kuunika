import actions from './actions';
import API from '../../api';

export const getCategories = () => {
  return {
    type: actions.getCategories,
    payload: API.getCategories(),
    meta: {}
  };
};

export const getCategoryData = (id: string) => ({
  type: actions.getCategoryData,
  payload: API.getCategoryData(id),
  meta: { id }
});

export const getConcept = (id: string, conceptId: string) => ({
  type: actions.getConcept,
  payload: API.getConcept(id, conceptId),
  meta: { id, conceptId }
});

export const searchConcept = (value: string) => {
  return value.length > 0
    ? {
        type: actions.searchConcept,
        payload: API.searchConcept(value),
        meta: { value }
      }
    : setSearchValue(value);
};

export const setSearchValue = (value: string) => {
  return {
    type: actions.setSearchValue,
    payload: value
  };
};

export const resetError = (action: string) => {
  return {
    type: actions.resetError,
    payload: action
  };
};
