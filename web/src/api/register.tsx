import api from './api';

import type { RegisterData, RegisterReply } from 'types/api.d';

const url = '/register';

const RegisterApi = {
  post: async (payload: RegisterData): Promise<RegisterReply> => {
    const { data } = await api.post(url, payload);
    return data;
  },
};

export default RegisterApi;
