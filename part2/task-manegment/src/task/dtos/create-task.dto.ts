import { IsDate, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  priority: 'HIGH' | 'MEDIUM' | 'LOW';

  @IsDate()
  dueDate: Date;
}
