import { Router } from "express";
import DepartmentController from "../controllers/department.controller";
import { authMiddleware } from '../middlewares/auth';


export const departmentRoutes = (app_router: Router) => {
    const router = Router();
    app_router.use("/department", router);

    router.get('/', authMiddleware, DepartmentController.index);
    router.get('/:id', authMiddleware, DepartmentController.show);
}