import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [],
    synchronize: true,
  }),TaskModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
