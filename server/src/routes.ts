import { Router } from 'express';

import loginRoute from './routes/login';
import registerRoute from './routes/register';
import characterRoute from './routes/character';
import swaggerRoute from './routes/swagger';

const routes = Router();

// Auth Related
routes.use('/', loginRoute);
routes.use('/', registerRoute);

// Data
routes.use('/', characterRoute);

// Docs
routes.use('/', swaggerRoute);

export default routes;
