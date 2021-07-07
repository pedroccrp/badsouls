export type CharacterReplyData = {
  error: 'missing-fields' | 'database-internal' | 'server-internal' | '';
};

export type CharacterReply = {
  status: number;
  data: CharacterReplyData;
};
