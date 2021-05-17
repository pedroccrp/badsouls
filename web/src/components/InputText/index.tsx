import React from 'react';

import './index.scss';

type InputTextProps = {
  type?: string;
  placeholder?: string;
};

const InputText = (props: InputTextProps) => {
  return (
    <input
      className='input-field'
      type={props.type || 'text'}
      placeholder={props.placeholder || ''}
      onFocus={e => (e.target.placeholder = '')}
      onBlur={e => (e.target.placeholder = props.placeholder || '')}
    />
  );
};

export default InputText;
