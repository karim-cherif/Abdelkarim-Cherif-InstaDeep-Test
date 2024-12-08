import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCategoryDto } from './dtos/update-category.dto';

const relations = ['task'];
@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.repo.create(createCategoryDto);
    return this.repo.save(category);
  }

  async findAll(): Promise<Category[]> {
    return this.repo.find({ relations });
  }

  async findOne(id: number): Promise<Category> {
    return this.repo.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.repo
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.tasks', 'tasks')
      .where('category.id = :id', { id: id })
      .getOne();

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    Object.assign(category, updateCategoryDto);
    await this.repo.save(category);

    return category;
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
