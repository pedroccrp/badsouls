import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserDocument } from 'src/models/user';
import { JwtUserData } from 'src/types/auth';

const hashPassword = (password: string, saltRounds: number = 10): string => {
  return bcrypt.hashSync(password, saltRounds);
};

const comparePasswords = (password: string, hashPassword: string): boolean => {
  return bcrypt.compareSync(password, hashPassword);
};

/**
 * @throws {Error} if JWT_SECRET is not defined in the environment
 */
const generateToken = (user: UserDocument): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in the environment');
  }

  const data: JwtUserData = {
    _id: user._id,
    email: user.email,
    username: user.username,
  };

  const token = jwt.sign(data, secret);

  return token;
};

/**
 * @returns authenticated user (contains _id, email and username)
 * @throws {Error} if JWT_SECRET is not defined in the environment
 * @throws {Error} if cannot verify provided token
 */
const verifyToken = (token: string): string | jwt.JwtPayload => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined in the environment');
  }

  return jwt.verify(token, secret);
};

export { hashPassword, comparePasswords, generateToken, verifyToken };
