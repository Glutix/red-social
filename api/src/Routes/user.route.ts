import { Router } from "express";
import {
  getAllUser,
  createUser,
  deleteUser,
  getOneUser,
} from "../Controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", getAllUser);

userRoutes.get("/:userId", getOneUser);

userRoutes.post("/", createUser);

userRoutes.delete("/:userId", deleteUser);

export default userRoutes;
