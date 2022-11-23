import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from "./entities/task.entity";
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
	constructor(
	  @Inject('TASK_REPOSITORY')
		private tasksRepository: Repository<Task>,
	) { }

	async create(task: CreateTaskDto): Promise <any> {
		return this.tasksRepository.save(this.tasksRepository.create(task));
	}
}
