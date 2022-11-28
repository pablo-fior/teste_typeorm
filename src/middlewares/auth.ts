import { Response, NextFunction } from "express";
import status from "http-status";
import { User } from "../entities/user";
import { verify } from "jsonwebtoken"
import { auth } from "../config/index";
import { dataSource } from '../config/db/index';
import { IRequest } from "../interfaces/IRequest";

export const authMiddleware = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
    
        if (!authorization) {
            return res.status(status.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
    
        const token = authorization.replace("Bearer ", "");
    
        const decoded = verify(token, auth.secret);
        
        const { id } = decoded as any;

        const user = await dataSource.getRepository(User).findOneBy({ id });

        if (!user) {
            return res.status(status.UNAUTHORIZED).json({ message: "Unauthorized" });
        }

        req.user = user;

        return next();
    } catch (error: any) {
        return res.status(status.UNAUTHORIZED).json({ message: "Unauthorized" });
    }
};