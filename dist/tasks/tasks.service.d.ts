import { createTaskDTO } from './DTOS/createTaskDTO';
import { updatedTaskDTO } from './DTOS/updateTaskDTO';
export declare class TasksService {
    getAllTask(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./task.entity").ITask> & import("./task.entity").ITask & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    getTask(taskId: any): Promise<import("mongoose").Document<unknown, {}, import("./task.entity").ITask> & import("./task.entity").ITask & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    createTask(createTaskDto: createTaskDTO, userId: string): Promise<import("mongoose").Document<unknown, {}, import("./task.entity").ITask> & import("./task.entity").ITask & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    deleteTask(taskId: any): Promise<any>;
    updateTask(updateData: updatedTaskDTO, taskId: any): Promise<any>;
}
