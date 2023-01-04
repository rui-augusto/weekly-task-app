import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    task: string;

    @Column({ length: 100 })
    description: string;
    
    @Column({ default: 0 })
    state: number; // 0 undone 1 done

    @Column()
    deadline: string;
}