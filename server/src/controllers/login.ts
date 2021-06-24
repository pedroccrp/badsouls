import { filterUserDataFromRequest } from '../helpers/user';

import loginService from '../services/login';

import { isErrorReply, respondWithReply } from '../helpers/login';

import type { Request, Response } from 'express';

import type { LoginReply } from '../types/login';

const loginUser = async (req: Request, res: Response) => {
  const userData = filterUserDataFromRequest(req);

  let reply: LoginReply;

  reply = loginService.validateLoginCredentials(userData);

  if (isErrorReply(reply)) {
    return respondWithReply(res, reply);
  }

  reply = await loginService.loginUser(userData);

  return respondWithReply(res, reply);
};

export default { loginUser };
