import { CharacterData } from 'src/models/character';
import { JwtUserData } from 'src/types/auth';
import { CharacterReply } from 'src/types/character-route';

const createCharacter = async (
  characterData: CharacterData,
  userData: JwtUserData,
): Promise<CharacterReply> => {
  let reply: CharacterReply = {
    status: 200,
    data: {
      error: '',
    },
  };

  console.log(`[character] creating ${characterData.name}`);
  console.log(`[character] by user ${userData.username}`);

  return reply;
};

export default { createCharacter };
