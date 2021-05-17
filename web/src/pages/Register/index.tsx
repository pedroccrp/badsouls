import React from 'react';

import Button from 'components/Button';
import InputText from 'components/InputText';

import './index.scss';

const Register = () => {
  const placeholderText = {
    email: 'email',
    username: 'username',
    password: 'password',
  };

  const handleRegister = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    e.preventDefault();

    // TODO: Implement register function
  };

  return (
    <form id='register-form' autoComplete='off'>
      <span>Register</span>
      <InputText type='email' placeholder={placeholderText.email} />
      <InputText type='username' placeholder={placeholderText.username} />
      <InputText type='password' placeholder={placeholderText.password} />
      <Button value='register' onClick={handleRegister} />
    </form>
  );
};

export default Register;
