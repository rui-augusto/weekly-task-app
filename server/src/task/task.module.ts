import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { tasksProviders } from "./task.providers";

@Module({
  imports: [],
  providers: [
    ...tasksProviders,
    TaskService],
  controllers: [TaskController],
  exports: [TaskService]
})
export class TaskModule {}
