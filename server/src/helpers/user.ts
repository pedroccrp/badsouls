import type { Request } from 'express';

import type { UserData } from '../models/user';

const filterUserDataFromRequest = (req: Request): UserData => {
  return {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
};

export { filterUserDataFromRequest };
