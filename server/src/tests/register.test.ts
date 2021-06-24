import { getMockReq, getMockRes } from '@jest-mock/express';

import database from './database-local';

import registerController from '../controllers/register';

import type { RegisterReply, RegisterRequestBody } from '../types/register';

const { res, clearMockRes } = getMockRes();

beforeAll(async () => await database.connect());
afterAll(async () => await database.close());

describe('Register controller', () => {
  test('should report missing fields', async () => {
    await testRegisterWith(
      {
        email: '',
        username: 'alzonpepito',
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

  test('should report invalid email', async () => {
    await testRegisterWith(
      {
        email: 'alzon',
        username: 'alzonpepito',
        password: 'Alzon123$',
      },
      {
        status: 400,
        data: {
          error: true,
          errorType: 'invalid-email',
        },
      },
    );
  });

  test('should report invalid username', async () => {
    await testRegisterWith(
      {
        email: 'alzon@pepito.com',
        username: 'alz',
        password: 'Alzon123$',
      },
      {
        status: 400,
        data: {
          error: true,
          errorType: 'invalid-username',
        },
      },
    );
  });

  test('should report invalid password', async () => {
    await testRegisterWith(
      {
        email: 'alzon@pepito.com',
        username: 'alzonpepito',
        password: 'Alzon',
      },
      {
        status: 400,
        data: {
          error: true,
          errorType: 'invalid-password',
        },
      },
    );
  });

  test('should create new user', async () => {
    await testRegisterWith(
      {
        email: 'alzon@pepito.com',
        username: 'alzonpepito',
        password: 'Alzon123$',
      },
      {
        status: 200,
        data: {
          error: false,
          errorType: '',
        },
      },
    );
  });

  test('should report that user is already registered', async () => {
    await testRegisterWith(
      {
        email: 'alzon@pepito.com',
        username: 'alzonpepito',
        password: 'Alzon123$',
      },
      {
        status: 400,
        data: {
          error: true,
          errorType: 'used-credentials',
        },
      },
    );
  });
});

const testRegisterWith = async (
  body: RegisterRequestBody,
  expectedReply: RegisterReply,
) => {
  const req = getMockReq({
    body,
  });

  await registerController.registerUser(req, res);

  expect(res.status).toBeCalledWith(expectedReply.status);
  expect(res.json).toBeCalledWith(expectedReply.data);

  clearMockRes();
};
