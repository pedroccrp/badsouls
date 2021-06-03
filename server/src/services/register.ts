import type { RegisterReply } from '../types/register';

import * as validateHelper from '../helpers/validate';

import userService from '../services/user';

import { UserData } from '../models/user';

/**
 * Checks if email or username are already in use
 */
const isUserRegistered = async (userData: UserData): Promise<boolean> => {
  return (
    (await userService.findOne({ username: userData.username })) != null ||
    (await userService.findOne({ email: userData.email })) != null
  );
};

/**
 * Checks for:
 *  - Missing fields
 *  - Invalid email
 *  - Invalid username
 *  - Invalid password
 */
const validateUserData = (userData: UserData): RegisterReply => {
  if (validateHelper.hasMissingFields(userData)) {
    return {
      status: 400,
      data: {
        error: true,
        errorType: 'missing-fields',
      },
    };
  }

  if (!validateHelper.validateEmail(userData.email)) {
    return {
      status: 400,
      data: {
        error: true,
        errorType: 'invalid-email',
      },
    };
  }

  if (!validateHelper.validateUsername(userData.username)) {
    return {
      status: 400,
      data: {
        error: true,
        errorType: 'invalid-username',
      },
    };
  }

  if (!validateHelper.validatePassword(userData.password)) {
    return {
      status: 400,
      data: {
        error: true,
        errorType: 'invalid-password',
      },
    };
  }

  return {
    status: 200,
    data: {
      error: false,
      errorType: '',
    },
  };
};

export default { isUserRegistered, validateUserData };
