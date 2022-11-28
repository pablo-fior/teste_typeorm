import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { User } from "../entities/user";
import status from "http-status"
import { Department } from '../entities/department';
import { hash } from '../config/index';

class UserController { 
    async index(_: Request, res: Response) {
        try {
            const users = await dataSource.getRepository(User).find({
                relations: {
                    department: true
                }
            });
            return res.json({ users });
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
        }
    }
    
    async show(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await dataSource.getRepository(User).findOneBy({ 
                id,
            });
            return res.json(user);
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
        }
    }

    async store(req: Request, res: Response) {
        try {
            const reqUser = req.body;
            reqUser.password = hash(reqUser.password);
            
            const [user] = dataSource.getRepository(User).create(reqUser);

            let department: Department | null;
            
            if (req.body.departmentId) {
                department = await dataSource.getRepository(Department).findOneBy({ id: req.body.departmentId });
                
                if (!department) {
                    return res.status(status.BAD_REQUEST).json({ message: 'Department not found' });
                }

                user.department = department;
            }

            await dataSource.getRepository(User).save(user);
            return res.json(user);
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
        }
    }
}

export default new UserController();