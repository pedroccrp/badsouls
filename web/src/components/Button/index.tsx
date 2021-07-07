import React from 'react';

import './index.scss';

type Props = {
  isDisabled?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

const Button = (props: Props) => {
  const { isDisabled, ...buttonAttributes } = props;

  return (
    <input
      {...buttonAttributes}
      className='button'
      type='button'
      disabled={isDisabled}
    />
  );
};

export default Button;
