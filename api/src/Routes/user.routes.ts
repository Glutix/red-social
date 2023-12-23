import { Router } from "express";
import {
  getAllUser,
  createUser,
  deleteUser,
  getOneUser,
  updateUserById,
} from "../Controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", getAllUser);

userRoutes.get("/:userId", getOneUser);

userRoutes.post("/", createUser);

userRoutes.delete("/:id", deleteUser);

userRoutes.put("/:userId", updateUserById);

export default userRoutes;
