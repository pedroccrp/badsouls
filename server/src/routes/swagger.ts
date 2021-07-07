import { Router } from 'express';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import { swaggerOptions } from '../config/swagger';

const router = Router();

const swaggerDocs = swaggerJsdoc(swaggerOptions);

router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export default router;
