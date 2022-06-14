import axios from 'axios';

const url = 'http://localhost:3333/api';

const api = axios.create({
  baseURL: url,
});

export default api;
