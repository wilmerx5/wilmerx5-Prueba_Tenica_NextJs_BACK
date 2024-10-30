import { Injectable } from '@nestjs/common';
import { createTaskDTO } from './DTOS/createTaskDTO';
import { updatedTaskDTO } from './DTOS/updateTaskDTO';
import TaskModel from './task.entity';
@Injectable()
export class TasksService {


    async getAllTask(userId: string) {
        try {

            return (await TaskModel.find({ userId })
                .select('title _id  status')
                .exec());
        } catch (e) {
            console.error('Error fetching tasks:', e);
            throw new Error('Error fetching tasks');
        }
    }

    async getTask(taskId) {
        try {

            const task = await TaskModel.findById(taskId)
                .select('title description _id createdAt expiresAt status')
                .exec();

            if (!task) {
                throw new Error('task not found');

            }

            return task

        } catch (e) {
            console.error('Error fetching tasks:', e);
            throw new Error('Error fetching task');
        }
    }

    async createTask(createTaskDto: createTaskDTO, userId: string) {
        try {

            const newTask = new TaskModel({
                title: createTaskDto.title,
                description: createTaskDto.description,
                expiresAt: createTaskDto.expiresAt,
                userId
            })

            const savedTask = await newTask.save()

            return savedTask
        } catch (e) {
            console.error('Error fetching tasks:', e);
            throw new Error('Error fetching tasks');
        }
    }
    async deleteTask(taskId) {
        try {

            const deletedTask = await TaskModel.findByIdAndDelete(taskId)
                .select('_id')
                .exec();

            if (!deletedTask) {
                throw new Error('Task not found');
            }

            return deletedTask?.id

        } catch (e) {
            throw new Error(e.message);
        }
    }



    async updateTask(updateData: updatedTaskDTO, taskId) {
        try {
            const updatedTask = await TaskModel.findByIdAndUpdate(
                taskId,
                updateData,
                { new: true }
            ).exec();

            if (!updatedTask) {
                throw new Error('Task not found');
            }
            return updatedTask?.id
        } catch (error) {
            throw new Error(error.message);
        }
    }



}
