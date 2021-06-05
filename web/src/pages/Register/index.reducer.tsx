import type { State, Action } from './index.d';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setField':
      return {
        ...state,
        replyData: undefined,
        [action.fieldName]: action.payload,
      };
    case 'beginLoading':
      return {
        ...state,
        replyData: undefined,
        isLoading: true,
      };
    case 'finishLoading':
      return {
        ...state,
        isLoading: false,
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case 'setReply':
      return {
        ...state,
        replyData: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
