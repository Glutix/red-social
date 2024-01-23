import { Router } from "express";
import { registerUser, login } from "../controllers/auth.controller";
import { schemaValidation } from "../middleware/schemaValidator";
import { loginSchema, registerScheme } from "../schemas/auth.schema";
const authRouter = Router();

//TODO: AUTH
authRouter.post("/register", schemaValidation(registerScheme), registerUser);

authRouter.post("/login", schemaValidation(loginSchema), login);

export default authRouter;
