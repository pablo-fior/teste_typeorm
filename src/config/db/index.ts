import { DataSource } from "typeorm";
import { User } from "../../entities/user";
import { Department } from "../../entities/department";


export const dataSource: DataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User, Department],
    synchronize: process.env.NODE_ENV === "dev",
    logging: process.env.NODE_ENV === "dev"
})