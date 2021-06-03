import mongoose from 'mongoose';

const connect = async () => {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const host = process.env.DB_HOST;
  const name = process.env.DB_NAME;

  if (!user || !pass || !host || !name) {
    console.error('[database] missing credential in .env file');
  }

  const uri = `mongodb+srv://${user}:${pass}@${host}/${name}?retryWrites=true&w=majority`;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  mongoose.connect(uri, options, err => {
    if (err) {
      console.error(`[database] connection error`);
      console.error(`[database] ${err}`);
      return;
    }

    console.log('[database] successfully connected');
  });
};

export default { connect };
