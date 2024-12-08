import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string

    @OneToMany(() => Task, task => task.category)
    @Column()
    tasks? : Task[];
}
