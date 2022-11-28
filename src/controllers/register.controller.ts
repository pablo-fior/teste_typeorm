import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { User } from "../entities/user";
import status from "http-status"
import { hash } from "../config/index";

class RegisterControler {
    async register(req: Request, res: Response) {
        try {
            const reqUser = req.body;
            reqUser.password = hash(reqUser.password);

            const [user] = dataSource.getRepository(User).create([reqUser]);

            await dataSource.getRepository(User).save(user);
            return res.json(user);
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message);
        }
    }
}

export default new RegisterControler();