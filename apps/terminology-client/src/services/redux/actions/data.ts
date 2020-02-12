import actions from './actions';
import API from '../../api';

export const getCategories = () => {
  return {
    type: actions.getCategories,
    payload: API.getCategories()
  };
};

export const getCategoryData = (id: string) => ({
  type: actions.getCategoryData,
  payload: API.getCategoryData(id),
  meta: id
});

export const getConcept = (id: string, conceptId: string) => ({
  type: actions.getConcept,
  payload: API.getConcept(id, conceptId),
  meta: `${id}${conceptId}`
});

export const searchConcept = (value: string) => {
  return {
    type: actions.searchConcept,
    payload: value.length > 0 ? API.searchConcept(value) : null
  };
};
