import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('task')
export class TaskController {
    @Get()
    findAll(): string{
        return "This action returns all tasks";
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return `This action returns a ${id} task`;
    }

}
