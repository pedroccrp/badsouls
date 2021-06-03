import validator from 'validator';

type ValidatorOptions = {
  username: {
    minLength: number;
  };
  password: validator.strongPasswordOptions;
};

export const validatorOptions: ValidatorOptions = {
  username: {
    minLength: 5,
  },
  password: {
    minLength: 8,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  },
};
