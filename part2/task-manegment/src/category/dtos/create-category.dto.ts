import { IsArray, IsOptional, IsString } from 'class-validator';
import { Task } from 'src/task/entities/task.entity';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  tasks?: Task[];
}
