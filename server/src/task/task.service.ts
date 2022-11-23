import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from "./entities/task.entity";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
	constructor(
	  @Inject('TASK_REPOSITORY')
		private tasksRepository: Repository<Task>,
	) { }

	async findAll() {
		return this.tasksRepository.find();
	}

	async findOne(id: number) {
		try{
			return this.tasksRepository.findOneBy({ id });
		} catch (e){
			throw new NotFoundException(e.message);
		}
	}

	async create(task: CreateTaskDto) {
		return this.tasksRepository.save(this.tasksRepository.create(task));
	}

	async update(id: number, task: UpdateTaskDto) {
		const updatedTask = await this.findOne(id);
		await this.tasksRepository.merge(updatedTask, task);
		return await this.tasksRepository.save(updatedTask);
	}

	async delete(id: number) {
		await this.tasksRepository.delete(id);
	}
}
