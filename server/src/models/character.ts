import mongoose, { Schema, Document, FilterQuery, UpdateQuery } from 'mongoose';

import type { CharacterAttribute } from '../types/character';

export type CharacterData = {
  ownerId: string;
  name: string;
  backstory: string;
  attributes: CharacterAttribute;
};

export interface CharacterDocument extends Document, CharacterData {}

export type CharacterUpdate = UpdateQuery<CharacterDocument>;
export type CharacterFilter = FilterQuery<CharacterDocument>;

const CharacterSchema: Schema = new Schema(
  {
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    username: {
      type: Schema.Types.String,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    confirmedEmail: {
      type: Schema.Types.Boolean,
      default: false,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

const Character = mongoose.model<CharacterDocument>(
  'Character',
  CharacterSchema,
);

export default Character;
