import { Response } from 'express';

import { CharacterData } from 'src/models/character';
import { CharacterReply } from 'src/types/character-route';

/**
 * Checks for:
 *  - Missing fields
 */
const validateCharacterData = (data: CharacterData): CharacterReply => {
  const reply: CharacterReply = {
    status: 200,
    data: {
      error: '',
    },
  };

  if (!validateMissingFields(data)) {
    reply.status = 400;
    reply.data.error = 'missing-fields';
  }

  return reply;
};

const validateMissingFields = (data: CharacterData): boolean => {
  return data.name !== undefined && data.name !== '';
};

const isErrorReply = (reply: CharacterReply): boolean => {
  return reply.data.error != '';
};

const respondWithReply = (res: Response, reply: CharacterReply) => {
  res.status(reply.status).json(reply.data);
};

export { validateCharacterData, isErrorReply, respondWithReply };
