import { IsNotEmpty } from 'class-validator'

export class CreateTaskDto {
    @IsNotEmpty()
    task: string;

    description?: string;

    @IsNotEmpty()
    deadline: string;
}