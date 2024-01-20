import { Router } from "express";

import {
  createCommentController,
  getCommentsByPostIdController,
  getCommentByIdController,
  updateCommentController,
  deleteCommentController,
} from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.post("/", createCommentController);

commentRouter.get("/:postID", getCommentsByPostIdController);

commentRouter.get("/:commentID", getCommentByIdController);

commentRouter.put("/:commentID", updateCommentController);

commentRouter.delete("/:commentID", deleteCommentController);

export default commentRouter;
