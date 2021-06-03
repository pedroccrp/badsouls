import express from 'express';
import validator from 'validator';

const routes = express.Router();

type Reply = {
  status: number;
  data: {
    error: boolean;
    errorType: 'missing-fields' | 'invalid-email' | 'wrong-credentials' | '';
  };
};

routes.post('/', (req, res) => {
  const { email, password } = req.body;

  const reply: Reply = {
    status: 200,
    data: {
      error: false,
      errorType: '',
    },
  };

  if (!email || !password) {
    reply.status = 400;
    reply.data.error = true;
    reply.data.errorType = 'missing-fields';
  } else if (!validator.isEmail(email)) {
    reply.status = 400;
    reply.data.error = true;
    reply.data.errorType = 'invalid-email';
  }

  res.status(reply.status).json(reply.data);
});

export default routes;
