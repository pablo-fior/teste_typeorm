import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
    })
    name!: string;

    @Column({
        type: "varchar",
    })
    description!: string;

    @OneToOne(() => User)
    @JoinColumn()
    coord!: User;

    @OneToMany(() => User, user => user.department)
    users!: User[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}