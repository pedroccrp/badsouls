import type { LoginReply } from '../types/login';
import type { UserData, UserDocument } from '../models/user';

import userService from '../services/user';

import { comparePasswords, generateToken } from '../helpers/auth';

/**
 * Checks for:
 *  - Missing fields
 */
const validateLoginCredentials = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): LoginReply => {
  if (!email || !password) {
    return {
      status: 400,
      data: {
        error: true,
        errorType: 'missing-fields',
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

const loginUser = async (userData: UserData): Promise<LoginReply> => {
  const userFound = await userService.findOne({
    email: userData.email,
  });

  let reply: LoginReply;

  if (!userFound || !comparePasswords(userData.password, userFound.password)) {
    reply = {
      status: 400,
      data: {
        error: true,
        errorType: 'wrong-credentials',
      },
    };

    return reply;
  }

  try {
    reply = {
      status: 200,
      data: {
        error: false,
        errorType: '',
        token: generateToken(userFound),
      },
    };
  } catch (err) {
    console.error(`[login] couldn't generate token`);
    console.error(`[login] ${err.message}`);

    reply = {
      status: 500,
      data: {
        error: true,
        errorType: 'server-internal',
      },
    };

    return reply;
  }

  return reply;
};

export default { validateLoginCredentials, loginUser };
