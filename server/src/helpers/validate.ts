import validator from 'validator';

import { UserData } from '../models/user';

import { validatorOptions } from '../config/validate';

const hasMissingFields = ({ email, username, password }: UserData): boolean => {
  return !email || !username || !password;
};

const validateEmail = (email: string): boolean => {
  return validator.isEmail(email);
};

const validateUsername = (username: string): boolean => {
  return username.length >= validatorOptions.username.minLength;
};

const validatePassword = (password: string): boolean => {
  return validator.isStrongPassword(password, validatorOptions.password);
};

export { hasMissingFields, validateEmail, validateUsername, validatePassword };
