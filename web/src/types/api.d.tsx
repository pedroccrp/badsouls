export type ApiReplyData = {
  error: boolean;
  errorType:
    | 'missing-fields'
    | 'invalid-email'
    | 'invalid-username'
    | 'invalid-password'
    | 'used-credentials'
    | 'database-internal'
    | '';
};
