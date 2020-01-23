import actions from './actions';
import API from '../../api';

export const getCategories = () => {
  return {
    type: actions.getCategories,
    payload: API.getCategories()
  };
};
