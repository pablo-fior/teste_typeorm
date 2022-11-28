import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { Department } from '../entities/department';
import status from 'http-status'

class DepartmentController { 
    async index(_: Request, res: Response) {
        try {
            const departments = await dataSource.getRepository(Department).find({
                relations: {
                    users: true
                }
            });
            return res.json(departments);
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
        }
    }
    
    async show(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const department = await dataSource.getRepository(Department).findOneBy({ id });
            return res.json(department);
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
        }
    }
}

export default new DepartmentController();