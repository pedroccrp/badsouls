import axios from 'axios';

import endpoints from 'config/endpoints';

const api = axios.create({
  baseURL: endpoints.API_URL,
  validateStatus: _ => true,
});

api.defaults.headers = {
  authorization: '',
};

export default api;
