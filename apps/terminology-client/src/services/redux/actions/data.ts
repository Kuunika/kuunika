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
