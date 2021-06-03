import type { Response } from 'express';

import type { RegisterReply } from '../types/register';

const isErrorReply = (reply: RegisterReply): boolean => {
  return reply.status != 200;
};

const respondWithReply = (res: Response, reply: RegisterReply) => {
  res.status(reply.status).json(reply.data);
};

export { isErrorReply, respondWithReply };
