import { Router } from 'express';

import registerController from '../controllers/register';

const router = Router();

/**
 * @swagger
 * /register:
 *  post:
 *    summary: Register user
 *    tags:
 *      - user
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *              example: "John Doe"
 *            email:
 *              type: string
 *              example: "john.doe@email.com"
 *            password:
 *              type: string
 *              example: "myReall8S8rongPa%$"
 *    responses:
 *      '200':
 *        description: Successfully registered user
 *
 *      '400':
 *        description: Some error with provided user data
 *
 *      '500':
 *        description: Some internal problem occurred
 *
 *
 */
router.post('/', registerController.registerUser);

export default router;
