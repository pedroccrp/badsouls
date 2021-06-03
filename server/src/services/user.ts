import mongoose from 'mongoose';

import { hashPassword } from '../helpers/auth';

import User, { UserData, UserDocument, UserFilter } from '../models/user';

const create = async (userData: UserData): Promise<boolean> => {
  let user;

  userData.password = hashPassword(userData.password);

  try {
    user = await User.create(userData);
    console.log(`[database] created user ${user._id}`);
  } catch (err) {
    if (err instanceof mongoose.Error) {
      console.error(`[database] create user error`);
      console.error(`[database] ${err.message}`);
    }

    return false;
  }

  return true;
};

const findOne = async (
  userFilter: UserFilter,
): Promise<UserDocument | null> => {
  try {
    const userFound = await User.findOne(userFilter);
    return userFound;
  } catch (err: unknown) {
    if (err instanceof mongoose.Error) {
      console.error(`[database] find one user error`);
      console.error(`[database] ${err.message}`);
    }
  }

  return null;
};

const deleteOne = async (userFilter: UserFilter): Promise<boolean> => {
  try {
    const { deletedCount } = await User.deleteOne(userFilter);
    return deletedCount == 1;
  } catch (err: unknown) {
    if (err instanceof mongoose.Error) {
      console.error(`[database] delete one user error`);
      console.error(`[database] ${err.message}`);
    }
  }
  return false;
};

export default { create, findOne, deleteOne };
