import { getMockReq, getMockRes } from '@jest-mock/express';

import database from './database-local';

import loginController from '../controllers/login';
import registerController from '../controllers/register';

import type { RegisterRequestBody } from '../types/register';
import type { LoginRequestBody, LoginReply } from '../types/login';

const { res, clearMockRes } = getMockRes();

beforeAll(async () => {
  process.env.JWT_SECRET = 'uu1f8sx25htyjr5uevis';

  await database.connect();
  await registerDefaultUser();
});

afterAll(async () => await database.close());

const userRegisterCredentials: RegisterRequestBody = {
  email: 'pepito@gmail.com',
  username: 'alzonpepito',
  password: 'Pepit0@#$',
};

const userLoginCredentials: LoginRequestBody = {
  email: userRegisterCredentials.email,
  password: userRegisterCredentials.password,
};

describe('Login controller', () => {
  it('should report missing fields', async () => {
    await testLoginWith(
      {
        email: '',
        password: 'Alzon123$',
      },
      {
        status: 400,
        data: {
          error: true,
          errorType: 'missing-fields',
        },
      },
    );
  });

  it('should report wrong credentials', async () => {
    await testLoginWith(
      {
        ...userLoginCredentials,
        password: 'aaaaaaaa',
      },
      {
        status: 400,
        data: {
          error: true,
          errorType: 'wrong-credentials',
        },
      },
    );
  });

  it('should login successfully', async () => {
    await testLoginWith(
      {
        ...userLoginCredentials,
      },
      {
        status: 200,
        data: {
          error: false,
          errorType: '',
          token: expect.any(String),
        },
      },
    );
  });
});

const registerDefaultUser = async () => {
  const req = getMockReq({
    body: userRegisterCredentials,
  });

  await registerController.registerUser(req, res);

  clearMockRes();
};

const testLoginWith = async (
  body: LoginRequestBody,
  expectedReply: LoginReply,
) => {
  const req = getMockReq({
    body,
  });

  await loginController.loginUser(req, res);

  expect(res.status).toBeCalledWith(expectedReply.status);
  expect(res.json).toBeCalledWith(expectedReply.data);

  clearMockRes();
};
