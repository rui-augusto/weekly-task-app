import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    // RETURNS ALL TASKS
    @Get('all')
    async findAll(){
        return await this.taskService.findAll();
    }

    // RETURNS TASK
    @Get(":id")
    async findOne(@Param('id') id: number){
        const task = await this.taskService.findOne(id);
        if (!task) {
            return "error: verify the id number and try again";
        }
        return task;
    }

    // CREATES NEW TASK
    @Post("create")
    async create(@Body() createTaskDto: CreateTaskDto){
        const task = await this.taskService.create(createTaskDto)
        if (!task){
            return "error: data is invalid";
        }
        return "task created";
    }

    // UPDATES TASK
    @Put("update/:id")
    async update(@Param('id') id: number, @Body() body: any){
        await this.taskService.update(id, body);
        return `task ${id} updated`;
    }

    // REMOVES TASK
    @Delete("remove/:id")
    async remove(@Param('id') id: number){
        const task = await this.taskService.findOne(id);
        await this.taskService.delete(id);
        if (!task) {
            return "error: verify the id number and try again";
        }
        return `task ${id} removed`;
    }    

}
