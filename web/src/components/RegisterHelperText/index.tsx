import React from 'react';

import { ApiReplyData } from 'types/api.d';

import './index.scss';

type Props = {
  className?: string;
  replyData: ApiReplyData;
};

const RegisterHelperText = ({ replyData, ...props }: Props) => {
  return (
    <div className={`${props.className}`}>
      <span>{displayTextForErrorType(replyData)}</span>
    </div>
  );
};

const displayTextForErrorType = ({ errorType }: ApiReplyData) => {
  switch (errorType) {
    case 'invalid-password':
      return 'Password not strong enough';
    case 'used-credentials':
      return 'Email or username already taken';
    case 'database-internal':
      return 'Internal server error';
  }
};

export default RegisterHelperText;
