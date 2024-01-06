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
import validateCreateUser from "../Validators/users";

const userRoutes = Router();

userRoutes.get("/", checkSession, getAllUser);

userRoutes.get("/:userId", getOneUser);

userRoutes.delete("/:id", deleteUser);

userRoutes.put("/:userId", updateUserById);

//TODO: AUTH
userRoutes.post("/register", validateCreateUser, createUser);
userRoutes.post("/login", login);

export default userRoutes;
