import React from 'react';

import './index.scss';

type Props = {
  tooltipLines?: string[];
} & React.HTMLAttributes<HTMLInputElement>;

const InputText = ({ tooltipLines, ...props }: Props) => {
  return (
    <div className='input-field-container'>
      <input
        {...props}
        className={`input-field ${props.className}`}
        type={props.typeof || 'text'}
        name={props.typeof || ''}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = props.placeholder || '')}
      />

      {tooltipLines && (
        <div className='input-field-tooltip'>{displayLines(tooltipLines)}</div>
      )}
    </div>
  );
};

const displayLines = (lines: string[]) => {
  return lines.map((line, index) => {
    return (
      <span key={index} className='input-field-tooltip-text'>
        {line}
      </span>
    );
  });
};

export default InputText;
