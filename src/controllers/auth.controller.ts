import { Request, Response } from "express";
import status from "http-status"
import AuthService from "../auth/auth.service";

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const response = await AuthService.auth(email, password)

            return res.json(response);
        } catch (error: any) {
            return res.status(status.INTERNAL_SERVER_ERROR).json(error.message ? error.message : error);
        }
    }
}

export default new AuthController();