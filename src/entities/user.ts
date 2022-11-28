import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm";
import { Department } from './department';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
    })
    name!: string;

    @Column()
    @Unique(["email"])
    email!: string;

    @Column()
    password!: string;

    @OneToOne(() => Department)
    @JoinColumn()
    department!: Department;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}