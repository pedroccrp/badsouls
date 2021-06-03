import bcrypt from 'bcrypt';

const hashPassword = (password: string, saltRounds: number = 10): string => {
  return bcrypt.hashSync(password, saltRounds);
};

export { hashPassword };
