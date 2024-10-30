import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;

}

const UserSChema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true,  },
  phone: { type: String, required: true,  },

});

const UserModel = mongoose.model<IUser>('User', UserSChema);

export default UserModel;
