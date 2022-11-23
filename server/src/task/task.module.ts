import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { tasksProviders } from "./task.providers";

@Module({
  imports: [DatabaseModule],
  providers: [
    ...tasksProviders,
    TaskService],
  controllers: [TaskController],
  exports: [TaskService]
})
export class TaskModule {}
