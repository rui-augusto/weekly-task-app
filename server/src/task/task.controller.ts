import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    findAll(): string{
        return "This action returns all tasks";
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return `This action returns a ${id} task`;
    }

    @Post()
    create(@Body() body: CreateTaskDto){
        return "This action creates a task";
    }

    @Put(':id')
    update(@Param(':id') id: number, @Body() body: any){
        return `This actions updates ${id} task`;
    }

    @Delete()
    remove(@Param(':id') id: number){
        return `This action removes ${id} task`;
    }    

}
