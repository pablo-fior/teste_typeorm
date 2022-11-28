import { Request } from "express";
import { User } from '../entities/user';

export interface IRequest extends Request {
    user?: User
}