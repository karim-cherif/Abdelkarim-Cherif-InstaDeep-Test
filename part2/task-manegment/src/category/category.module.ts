import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TaskModule } from 'src/task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), TaskModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
