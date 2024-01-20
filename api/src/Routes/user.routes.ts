import { Router } from "express";
import {
  getAllUser,
  deleteUser,
  getOneUser,
  updateUserById,
} from "../controllers/user.controller";
import checkSession from "../middleware/checkSession";

const userRouter = Router();

userRouter.get("/", checkSession, getAllUser);

userRouter.get("/:userId", getOneUser);

userRouter.delete("/:id", deleteUser);

userRouter.put("/:userId", updateUserById);

export default userRouter;
