import type { Request, Response } from 'express';
import type { RegisterReply } from '../types/register';

import { isErrorReply, respondWithReply } from '../helpers/register';
import { filterUserDataFromRequest } from '../helpers/user';

import registerService from '../services/register';
import userService from '../services/user';

const registerUser = async (req: Request, res: Response) => {
  const userData = filterUserDataFromRequest(req);

  let reply: RegisterReply = {
    status: 200,
    data: {
      error: false,
      errorType: '',
    },
  };

  reply = registerService.validateUserData(userData);

  if (isErrorReply(reply)) {
    return respondWithReply(res, reply);
  }

  if (await registerService.isUserRegistered(userData)) {
    reply = {
      status: 400,
      data: {
        error: true,
        errorType: 'used-credentials',
      },
    };

    return respondWithReply(res, reply);
  }

  if (!userService.create(userData)) {
    reply = {
      status: 500,
      data: {
        error: true,
        errorType: 'database-internal',
      },
    };

    return respondWithReply(res, reply);
  }

  respondWithReply(res, reply);
};

export default { registerUser };
