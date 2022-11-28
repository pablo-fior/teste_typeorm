import { Router } from "express";
import registerController from "../controllers/register.controller";
import { registerValidator } from "../validators/register";

export const registerRoutes = (app_router: Router) => {
    const router = Router();
    app_router.use("/register", router);

    router.post('/', registerValidator, registerController.register);
}