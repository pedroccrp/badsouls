import type { ApiReplyData } from 'types/api.d';

export type State = {
  email: string;
  username: string;
  password: string;
  isButtonDisabled: boolean;
  isLoading: boolean;
  replyData?: ApiReplyData;
};

export type Action =
  | { type: 'setField'; fieldName: string; payload: string }
  | { type: 'beginLoading' }
  | { type: 'finishLoading' }
  | { type: 'setIsButtonDisabled'; payload: boolean }
  | { type: 'setReply'; payload: ApiReplyData };
