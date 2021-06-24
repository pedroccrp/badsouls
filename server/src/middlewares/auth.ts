import type { Request, Response, NextFunction } from 'express';

import { verifyToken } from '../helpers/auth';

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      error: true,
      errorType: 'missing-token',
    });
  }

  try {
    req.body.user = verifyToken(token);
  } catch (err) {
    console.error(`[login] couldn't verify token`);
    console.error(`[login] ${err.message}`);

    return res.status(400).json({
      error: true,
      errorType: 'invalid-token',
    });
  }

  next();
};

export default { verify };
