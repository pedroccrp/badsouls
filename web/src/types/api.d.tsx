export type ApiReplyData = {
  error: boolean;
  errorType: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginReply = {
  token?: string;
} & ApiReplyData;

export type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export type RegisterReply = ApiReplyData;
