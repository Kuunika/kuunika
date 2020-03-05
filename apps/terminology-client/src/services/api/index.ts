import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3333/api/v0';
export default {
  getCategories: () => {
    const url = `${API_ENDPOINT}/categories`;
    return axios.get(url);
  },
  getCategoryData: (id: string) => {
    const url = `${API_ENDPOINT}/sources/${id}`;
    return axios.get(url);
  },
  getConcept: (id: string, conceptId: string) => {
    const url = `${API_ENDPOINT}/sources/${id}/${conceptId}`;
    return axios.get(url);
  }
};
