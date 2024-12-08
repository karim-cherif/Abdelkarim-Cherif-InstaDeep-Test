import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { DeepPartial, Repository } from 'typeorm';


const relations = ['category'];
@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.repo.create(createTaskDto);
    return this.repo.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.repo.find({ relations });
  }

  async findOne(id: number): Promise<Task> {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {

    const taskPartial: DeepPartial<Task> = {
      name: updateSubjectDto.name,
      coef: updateSubjectDto.coef,
      type: updateSubjectDto.type,
      teacher: { id: updateSubjectDto.teacher },
    };
    await this.repo.update(id, updateTaskDto);
    return this.subjectRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
