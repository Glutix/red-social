import { Router } from "express";
import {
  getAllUser,
  createUser,
  deleteUser,
  getOneUser,
  updateUserById,
  login,
} from "../Controllers/user.controller";
import validateToken from "./validate-token";

const userRoutes = Router();

userRoutes.get("/", validateToken, getAllUser);

userRoutes.get("/:userId", getOneUser);

userRoutes.post("/", createUser);

userRoutes.delete("/:id", deleteUser);

userRoutes.put("/:userId", updateUserById);

userRoutes.post("/login", login)

export default userRoutes;
