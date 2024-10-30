import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
}
declare const UserModel: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>;
export default UserModel;
