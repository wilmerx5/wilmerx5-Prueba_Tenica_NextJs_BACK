import { Response } from 'express';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasks(request: any, res: Response): Promise<void>;
    getTask(id: string, res: Response): Promise<void>;
    createTask(createTaskDTO: any, res: Response, request: any): Promise<void>;
    deleteTask(id: string, res: Response): Promise<void>;
    updateTask(id: string, updateTaskDTO: any, res: Response): Promise<void>;
}
