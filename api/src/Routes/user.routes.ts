import { Router } from "express";
import {
  getAllUser,
  deleteUser,
  getOneUser,
  updateUserById,
} from "../controllers/user.controller";
import checkSession from "../middleware/checkSession";
import { updateScheme } from "../schemas/user.scheme";
import { schemaValidation } from "../middleware/schemaValidator";

const userRouter = Router();

userRouter.get("/", checkSession, getAllUser);

userRouter.get("/:userId", getOneUser);

userRouter.delete("/", checkSession, deleteUser);

userRouter.put(
  "/",
  checkSession,
  schemaValidation(updateScheme),
  updateUserById
);

export default userRouter;
