import { Router } from "express";
import { registerUser, login } from "../controllers/auth.controller";
import { schemaValidation } from "../middleware/schemaValidator";
import { registerScheme } from "../schemas/auth.schema";
const authRouter = Router();

//TODO: AUTH
authRouter.post("/register", schemaValidation(registerScheme), registerUser);

authRouter.post("/login", login);

export default authRouter;
