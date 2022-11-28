import yup from '../../config/yup';
import { Request, Response, NextFunction } from 'express';
import status from 'http-status';

export const userStoreValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
            departmentId: yup.number(),
        });

        await schema.validate(req.body, { abortEarly: false });

        return next();
    } catch (error: any) {
        return res.status(status.BAD_REQUEST).json(error);
    }
};

export const userShowValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = yup.object().shape({
            id: yup.number().required(),
        });

        await schema.validate(req.params, { abortEarly: false });

        return next();
    } catch (error: any) {
        return res.status(status.BAD_REQUEST).json(error);
    }
};