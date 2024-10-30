import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  userId: string;
  createdAt: Date;
  expiresAt :Date;
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, default: 'pending' },
  userId: { type: String, required: true }, // ID del usuario que creó la tarea
  createdAt: {
    type: Date,
    default: () => {
      const date = new Date();
      date.setUTCHours(date.getUTCHours() - 5); // Ajusta la fecha a UTC-5
      return date;
    }
  },
  expiresAt: { 
    type: Date, 
    default: () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 15); // Suma 15 días
        return currentDate;
    }
}
});

// Crear el modelo a partir del esquema
const TaskModel = mongoose.model<ITask>('Task', TaskSchema);

export default TaskModel;
