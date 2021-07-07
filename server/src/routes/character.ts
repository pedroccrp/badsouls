import { Router } from 'express';

import characterController from 'src/controllers/character';
import authMiddleware from 'src/middlewares/auth';

const router = Router();

router.get(
  '/characters',
  authMiddleware.verify,
  characterController.getAllCharacters,
);

router.post(
  '/characters',
  authMiddleware.verify,
  characterController.createCharacter,
);

export default router;
