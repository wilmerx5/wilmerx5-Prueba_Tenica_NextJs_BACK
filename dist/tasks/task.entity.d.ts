import mongoose, { Document } from 'mongoose';
export interface ITask extends Document {
    title: string;
    description: string;
    status: string;
    userId: string;
    createdAt: Date;
    expiresAt: Date;
}
declare const TaskModel: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask> & ITask & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>;
export default TaskModel;
