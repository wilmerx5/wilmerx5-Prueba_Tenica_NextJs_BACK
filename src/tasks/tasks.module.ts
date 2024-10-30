import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TasksController } from './task.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  imports: [
    AuthModule
  ],
  providers: [TasksService],
})
export class TasksModule {}
