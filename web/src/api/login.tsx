import api from './api';

import type { LoginData, LoginReply } from 'types/api.d';

const url = '/login';

const LoginApi = {
  post: async (payload: LoginData): Promise<LoginReply> => {
    const { data } = await api.post(url, payload);
    return data;
  },
};

export default LoginApi;
