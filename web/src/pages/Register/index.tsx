import React from 'react';

import isEmail from 'validator/lib/isEmail';

import './index.scss';

const Register = () => {
  const placeholderText = {
    email: 'email',
    username: 'username',
    password: 'password',
  };

  return (
    <form id='register-form' autoComplete='off'>
      <span>Register</span>
      <input
        className='input-field'
        type='email'
        placeholder={placeholderText.email}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = placeholderText.email)}
      />
      <input
        className='input-field'
        type='username'
        placeholder={placeholderText.username}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = placeholderText.username)}
      />
      <input
        className='input-field'
        type='password'
        placeholder={placeholderText.password}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = placeholderText.password)}
      />

      <input className='button' type='button' value='register' />
    </form>
  );
};

export default Register;
