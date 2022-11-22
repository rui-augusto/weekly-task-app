import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from "./entities/task.entity";

@Injectable()
export class TaskService {
    constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
    ) {}
}
