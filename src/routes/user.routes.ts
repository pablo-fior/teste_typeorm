import { Router } from "express";
import UserController from "../controllers/user.controller";
import { userShowValidator, userStoreValidator } from "../validators/user";
import { authMiddleware } from '../middlewares/auth';


export const userRoutes = (app_router: Router) => {
    const router = Router();
    app_router.use("/user", router);

    router.get('/', authMiddleware, UserController.index);
    router.get('/:id', authMiddleware, userShowValidator, UserController.show);
    router.post('/', authMiddleware, userStoreValidator, UserController.store);
}