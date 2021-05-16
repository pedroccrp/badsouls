import React from 'react';

import './index.scss';

type ButtonProps = {
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <input
      className='button'
      type='button'
      value={props.value ? props.value : 'default'}
      onClick={props.onClick}
    />
  );
};

export default Button;