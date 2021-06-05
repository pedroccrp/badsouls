import React, { useReducer, useEffect } from 'react';

import isEmail from 'validator/lib/isEmail';

import Button from 'components/Button';
import InputText from 'components/InputText';

import './index.scss';

type State = {
  email: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  email: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
};

type Action =
  | { type: 'setEmail'; payload: string }
  | { type: 'setPassword'; payload: string }
  | { type: 'setIsButtonDisabled'; payload: boolean }
  | { type: 'loginSuccess'; payload: string }
  | { type: 'loginFailed'; payload: string }
  | { type: 'setIsError'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setEmail':
      return {
        ...state,
        isError: false,
        email: action.payload,
      };
    case 'setPassword':
      return {
        ...state,
        isError: false,
        password: action.payload,
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload,
      };
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.email.trim() || !state.password.trim()) {
      return dispatch({
        type: 'setIsButtonDisabled',
        payload: true,
      });
    }

    dispatch({
      type: 'setIsButtonDisabled',
      payload: false,
    });
  }, [state.email, state.password]);

  const handleLogin = () => {
    if (!isEmail(state.email)) {
      return dispatch({
        type: 'loginFailed',
        payload: 'Incorrect email or password',
      });
    }

    dispatch({
      type: 'loginSuccess',
      payload: 'Login Successfully',
    });
  };

  // const handleKeyPress = (event: React.KeyboardEvent) => {
  //   if (event.keyCode === 13 || event.which === 13) {
  //     state.isButtonDisabled || handleLogin();
  //   }
  // };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> =
    event => {
      dispatch({
        type: 'setEmail',
        payload: event.target.value,
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    event => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value,
      });
    };

  const placeholderText = {
    email: 'email',
    password: 'password',
  };

  return (
    <form id='login-form' autoComplete='off'>
      <span className='title'>Login</span>

      <InputText
        typeof='email'
        placeholder={placeholderText.email}
        onChange={handleEmailChange}
      />
      <InputText
        typeof='password'
        placeholder={placeholderText.password}
        onChange={handlePasswordChange}
      />

      <Button
        defaultValue='login'
        isDisabled={state.isButtonDisabled}
        onClick={handleLogin}
      />
    </form>
  );
};

export default Login;
