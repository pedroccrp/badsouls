import { Router } from 'express';

import loginRoute from './routes/login';
import registerRoute from './routes/register';
import swaggerRoute from './routes/swagger';

const routes = Router();

routes.use('/login', loginRoute);
routes.use('/register', registerRoute);

routes.use('/docs', swaggerRoute);

export default routes;
