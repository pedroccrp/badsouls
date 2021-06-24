export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LoginReplyData = {
  error: boolean;
  errorType:
    | 'missing-fields'
    | 'wrong-credentials'
    | 'database-internal'
    | 'server-internal'
    | '';
};

export type LoginReply =
  | {
      status: number;
      data: LoginReplyData;
    }
  | {
      status: 200;
      data: LoginReply & {
        token: string;
      };
    };
