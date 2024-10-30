"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("./task.entity");
let TasksService = class TasksService {
    async getAllTask(userId) {
        try {
            return (await task_entity_1.default.find({ userId })
                .select('title _id  status')
                .exec());
        }
        catch (e) {
            console.error('Error fetching tasks:', e);
            throw new Error('Error fetching tasks');
        }
    }
    async getTask(taskId) {
        try {
            const task = await task_entity_1.default.findById(taskId)
                .select('title description _id createdAt expiresAt status')
                .exec();
            if (!task) {
                throw new Error('task not found');
            }
            return task;
        }
        catch (e) {
            console.error('Error fetching tasks:', e);
            throw new Error('Error fetching task');
        }
    }
    async createTask(createTaskDto, userId) {
        try {
            const newTask = new task_entity_1.default({
                title: createTaskDto.title,
                description: createTaskDto.description,
                expiresAt: createTaskDto.expiresAt,
                userId
            });
            const savedTask = await newTask.save();
            return savedTask;
        }
        catch (e) {
            console.error('Error fetching tasks:', e);
            throw new Error('Error fetching tasks');
        }
    }
    async deleteTask(taskId) {
        try {
            const deletedTask = await task_entity_1.default.findByIdAndDelete(taskId)
                .select('_id')
                .exec();
            if (!deletedTask) {
                throw new Error('Task not found');
            }
            return deletedTask?.id;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async updateTask(updateData, taskId) {
        try {
            const updatedTask = await task_entity_1.default.findByIdAndUpdate(taskId, updateData, { new: true }).exec();
            if (!updatedTask) {
                throw new Error('Task not found');
            }
            return updatedTask?.id;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map