import { Body, Controller, Delete, Get, Param, Post, Put, Request, Res, UseGuards, } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ITask } from './task.entity';
import { TasksModule } from './tasks.module';
import { TasksService } from './tasks.service';



@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async getTasks(@Request() request, @Res() res: Response) {

    try {

      const userId = request['user']['userId']

      const tasks: ITask[] = await this.tasksService.getAllTask(userId)

      res.status(200).json({ "status": "success", data: tasks })

    }
    catch (e) {
      res.status(400).json({ "status": "error", "message": "error fetching tasks" })

    }

  }
  @Get('/:id')
  async getTask(@Param('id') id: string, @Res() res: Response) {

    try {


      const task: ITask = await this.tasksService.getTask(id)

      res.status(200).json({ "status": "success", data: task })

    }
    catch (e) {
      res.status(400).json({ "status": "error", "message": e.message })

    }

  }

  @Post()
  async createTask(@Body() createTaskDTO, @Res() res: Response, @Request() request) {

    try {

      const userId = request['user']['userId']

      const task: TasksModule = await this.tasksService.createTask(createTaskDTO, userId)



      res.status(201).json({ "status": "success", data: task })

    }
    catch (e) {
      res.status(400).json({ "status": "error", "message": "error creating task" })

    }

  }


  @Delete('/:id')
  async deleteTask(@Param('id') id: string, @Res() res: Response) {

    try {


      const idDeleted: string = await this.tasksService.deleteTask(id)

      res.status(200).json({ "status": "success", data: idDeleted })

    }
    catch (e) {
      res.status(400).json({ "status": "error", "message": e.message })

    }


    
  }
  @Put('/:id')
  async updateTask(@Param('id') id: string, @Body() updateTaskDTO,@Res() res: Response) {

    try {

      const idUpdatedTask:string = await this.tasksService.updateTask(updateTaskDTO,id)

      res.status(200).json({ "status": "success", data: idUpdatedTask })

    }
    catch (e) {
      res.status(400).json({ "status": "error", "message": e.message })

    }
  }




}