import { Router } from "express";
import { userRoutes } from "./user.routes";
import { departmentRoutes } from './department.routes';
import { authRoutes } from './auth.routes';
import { registerRoutes } from './register.routes';

const router = Router();

registerRoutes(router);
authRoutes(router)
userRoutes(router);
departmentRoutes(router);

export default router;