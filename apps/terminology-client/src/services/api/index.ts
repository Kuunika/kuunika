import axios from 'axios';

const API_ENDPOINT = 'http://127.0.0.1:4002/api';
export default {
  getCategories: () => {
    const url = `${API_ENDPOINT}/categories`;
    return axios.get(url);
  },
  getCategoryData: (id: string) => {
    const url = `${API_ENDPOINT}/sources/${id}`;
    return axios.get(url);
  }
};
