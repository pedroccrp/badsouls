import type { Response } from 'express';

import type { LoginReply } from '../types/login';

const isErrorReply = (reply: LoginReply): boolean => {
  return reply.status != 200;
};

const respondWithReply = (res: Response, reply: LoginReply) => {
  res.status(reply.status).json(reply.data);
};

export { isErrorReply, respondWithReply };
