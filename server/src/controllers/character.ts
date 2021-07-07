import { Request, Response } from 'express';
import { CharacterData } from 'src/models/character';

import { JwtUserData } from 'src/types/auth';
import { CharacterReply } from 'src/types/character-route';

import {
  isErrorReply,
  validateCharacterData,
  respondWithReply,
} from 'src/helpers/character';

import characterService from 'src/services/character';

const getAllCharacters = async (req: Request, res: Response) => {
  const userData: JwtUserData = req.body.user;

  res.json(userData);
};

const getCharacter = async (req: Request, res: Response) => {
  const userData: JwtUserData = req.body.user;

  res.json(userData);
};

const createCharacter = async (req: Request, res: Response) => {
  const userData: JwtUserData = req.body.user;
  const characterData: CharacterData = req.body;

  let reply: CharacterReply;

  reply = validateCharacterData(characterData);

  if (isErrorReply(reply)) {
    return respondWithReply(res, reply);
  }

  reply = await characterService.createCharacter(characterData, userData);

  return respondWithReply(res, reply);
};

const updateCharacter = async (req: Request, res: Response) => {
  const userData: JwtUserData = req.body.user;

  res.json(userData);
};

const deleteCharacter = async (req: Request, res: Response) => {
  const userData: JwtUserData = req.body.user;

  res.json(userData);
};

export default { getAllCharacters, createCharacter };
