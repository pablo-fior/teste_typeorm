import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { authValidator } from '../validators/auth/index';

export const authRoutes = (app_router: Router) => {
    const router = Router();
    app_router.use("/login", router);

    router.post('/', authValidator, AuthController.login);
}