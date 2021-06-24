export type RegisterRequestBody = {
  email: string;
  username: string;
  password: string;
};

export type RegisterReplyData = {
  error: boolean;
  errorType:
    | 'missing-fields'
    | 'invalid-email'
    | 'invalid-username'
    | 'invalid-password'
    | 'used-credentials'
    | 'database-internal'
    | 'server-internal'
    | '';
};

export type RegisterReply = {
  status: number;
  data: RegisterReplyData;
};
