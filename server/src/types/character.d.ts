import type { Item } from '../types/item';

export type CharacterAttribute = {
  constitution: number;
  charisma: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
};

export type CharacterClass = {
  name: string;
  description: string;
  initialAttributes: CharacterAttribute;
  initialItems: Array<Item>;
};
