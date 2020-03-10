import axios from 'axios';
import { environment } from '../../environments/environment';

const API_ENDPOINT = environment.api.apiEndpoint;
export default {
  getCategories: () => {
    const url = `${API_ENDPOINT}/categories`;
    return axios.get(url);
  },
  getCategoryData: (id: string, filterTerm = '') => {
    const url =
      filterTerm.length == 0
        ? `${API_ENDPOINT}/sources/${id}`
        : `${API_ENDPOINT}/sources/${id}?filterTerm=${filterTerm}`;
    return axios.get(url);
  },
  getConcept: (id: string, conceptId: string) => {
    const url = `${API_ENDPOINT}/sources/${id}/${conceptId}`;
    return axios.get(url);
  },
  searchConcept: (value: string) => {
    const url = `${API_ENDPOINT}/search/${value}`;
    return axios.get(url);
  }
};
