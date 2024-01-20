import { Router } from "express";
import { registerUser, login } from "../controllers/auth.controller";

const authRouter = Router();

//TODO: AUTH
authRouter.post("/register", registerUser);
authRouter.post("/login", login);

export default authRouter;
