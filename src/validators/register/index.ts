import yup from '../../config/yup';
import { Request, Response, NextFunction } from 'express';
import status from 'http-status';

export const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
        });

        await schema.validate(req.body, { abortEarly: false });

        return next();
    } catch (error: any) {
        return res.status(status.BAD_REQUEST).json(error);
    }
};