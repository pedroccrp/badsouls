import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import ReactLoading from 'react-loading';

import {
  validateRegisterFields,
  validateEmail,
  validatePassword,
  validateUsername,
} from 'helpers/validate';

import api from 'services/api';

import Button from 'components/Button';
import InputText from 'components/InputText';
import RegisterHelperText from 'components/RegisterHelperText';

import { reducer } from './index.reducer';

import type { ApiReplyData } from 'types/api.d';

import './index.scss';

/**
 * Displays the form for registering a new user.
 *
 * After validating all fields, enables the submit button that makes a request via
 * the api service to the backend.
 *
 * Handles the reply from api in some ways:
 *  - On success:
 *      Redirects to login page
 *  - On error:
 *      Shows text with the error and waits for the next submission
 */
const Register = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    username: '',
    password: '',
    isButtonDisabled: true,
    isLoading: false,
  });

  const history = useHistory();

  const placeholderText = {
    email: 'email',
    username: 'username',
    password: 'password',
  };

  const handleFieldChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({
      type: 'setField',
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    dispatch({
      type: 'setIsButtonDisabled',
      payload: !validateRegisterFields({
        email: state.email,
        username: state.username,
        password: state.password,
      }),
    });
  }, [state.email, state.username, state.password]);

  const handleRegister = async () => {
    const payload = {
      email: state.email,
      username: state.username,
      password: state.password,
    };

    dispatch({ type: 'beginLoading' });

    try {
      const { data } = await api.post('/register', payload);
      const replyData: ApiReplyData = data;

      dispatch({
        type: 'setReply',
        payload: replyData,
      });
    } catch (e) {
      console.error('[register] error posting to api');
      console.error(e);
    } finally {
      dispatch({ type: 'finishLoading' });
    }
  };

  useEffect(() => {
    if (state.replyData && !state.replyData.error) {
      history.push('/login');
    }
  }, [history, state.replyData]);

  return (
    <form id='register-form' autoComplete='off'>
      <span className='form-title'>Register</span>

      <InputText
        className={
          state.email && !validateEmail(state.email) ? 'input-field-error' : ''
        }
        typeof='email'
        placeholder={placeholderText.email}
        onChange={handleFieldChange}
      />
      <InputText
        className={
          state.username && !validateUsername(state.username)
            ? 'input-field-error'
            : ''
        }
        typeof='username'
        placeholder={placeholderText.username}
        onChange={handleFieldChange}
      />
      <InputText
        className={
          state.password && !validatePassword(state.password)
            ? 'input-field-error'
            : ''
        }
        typeof='password'
        placeholder={placeholderText.password}
        onChange={handleFieldChange}
        tooltipLines={[
          '· at least 8 characters',
          '· at least 1 capital letter',
          '· at least 1 number',
          '· at least 1 symbol',
        ]}
      />

      {state.isLoading && (
        <ReactLoading type='spinningBubbles' className='helper-container' />
      )}

      {state.replyData && state.replyData.error && (
        <RegisterHelperText
          replyData={state.replyData}
          className='helper-container helper-text'
        />
      )}

      <Button
        defaultValue='register'
        isDisabled={state.isButtonDisabled}
        onClick={handleRegister}
      />
    </form>
  );
};

export default Register;
