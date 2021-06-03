import mongoose, { Schema, Document, FilterQuery, UpdateQuery } from 'mongoose';

export type UserData = {
  email: string;
  username: string;
  password: string;
};

export interface UserDocument extends Document, UserData {}

export type UserUpdate = UpdateQuery<UserDocument>;
export type UserFilter = FilterQuery<UserDocument>;

const UserSchema: Schema = new Schema(
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
    isAdmin: {
      type: Schema.Types.Boolean,
      default: false,
    },
    characters: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    adventures: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true },
);

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;
