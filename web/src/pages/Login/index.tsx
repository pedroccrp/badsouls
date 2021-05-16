import React, { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import isEmail from 'validator/lib/isEmail';

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
        email: action.payload,
      };
    case 'setPassword':
      return {
        ...state,
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
  const history = useHistory();

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

  const handleRegister = () => {
    history.push('register');
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

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
      <span>Login</span>
      <input
        className='input-field'
        type='text'
        placeholder={placeholderText.email}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = placeholderText.email)}
      />
      <input
        className='input-field'
        type='password'
        placeholder={placeholderText.password}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = placeholderText.password)}
      />
      <div className='button-container'>
        <input
          className='button'
          type='button'
          value='register'
          onClick={e => handleRegister()}
        />
        <input className='button' type='button' value='login' />
      </div>
    </form>
  );
};

export default Login;
