import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

@PrimaryGeneratedColumn()
id : number;

@Column()
title: string;

@Column()
description: string;

@ManyToOne(() => Category, (category) => category.tasks)
@Column()
category : string;

@Column()
priority: 'HIGH' | 'MEDIUM' | 'LOW';

@Column()
dueDate: Date;

}
