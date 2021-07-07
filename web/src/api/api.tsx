import axios from 'axios';

import auth from 'services/auth';

import endpoints from 'config/endpoints';

const api = axios.create({
  baseURL: endpoints.API_URL,
  validateStatus: _ => true, // Was throwing errors for every status that's not 200
});

api.defaults.headers = {
  Authorization: auth.getToken(),
};

export default api;
