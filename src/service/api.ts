import axios from 'axios';

const token = 'E09FBC2D-C866-4FEF-94F5-CD5738418454'

export const api = axios.create({
  baseURL: 'https://pontogo-api.herokuapp.com/',
  headers: {
    Authorization: `${token}`,
  }
});