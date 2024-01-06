import { Router } from "express";

import {
  getAllUser,
  createUser,
  deleteUser,
  getOneUser,
  updateUserById,
  login,
} from "../Controllers/user.controller";
import checkSession from "../Middleware/checkSession";

const userRoutes = Router();

userRoutes.get("/", checkSession, getAllUser);

userRoutes.get("/:userId", getOneUser);

userRoutes.delete("/:id", deleteUser);

userRoutes.put("/:userId", updateUserById);

//TODO: AUTH
userRoutes.post("/register", createUser);
userRoutes.post("/login", login);

export default userRoutes;
