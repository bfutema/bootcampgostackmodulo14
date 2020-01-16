import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.infyweb.com.br',
});

export default api;
