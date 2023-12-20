import { Router } from "express";
import { getUser, createUser, deleteUser } from "../Controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", getUser);

userRoutes.post("/", createUser);

userRoutes.delete("/:userID", deleteUser);

export default userRoutes