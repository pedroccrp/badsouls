import validator from 'validator';

import { validatorOptions } from 'config/validate';

const validateRegisterFields = (fields: {
  email: string;
  username: string;
  password: string;
}): boolean => {
  return (
    !hasMissingFields(fields) &&
    validateEmail(fields.email) &&
    validateUsername(fields.username) &&
    validatePassword(fields.password)
  );
};

const hasMissingFields = ({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}): boolean => {
  return !email.trim() || !username.trim() || !password.trim();
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

export {
  validateRegisterFields,
  validateEmail,
  validatePassword,
  validateUsername,
};
