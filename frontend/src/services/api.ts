import axios from 'axios';

const url =
  process.env.REACT_APP_API_URL === 'dev'
    ? 'http://localhost:3333'
    : process.env.REACT_APP_API_URL === 'hom'
    ? 'https://api-hom.precato.com.br'
    : 'https://api.precato.com.br';

const api = axios.create({
  baseURL: url,
});

export default api;
