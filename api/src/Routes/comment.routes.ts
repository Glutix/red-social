import { Router } from "express";

import { createCommentController, getCommentsByPostIdController, getCommentByIdController, updateCommentController, deleteCommentController } from "../Controllers/comment.controller";

const commentRoutes = Router();

commentRoutes.post("/", createCommentController);

commentRoutes.get("/:postID",getCommentsByPostIdController);

commentRoutes.get("/:commentID",getCommentByIdController);

commentRoutes.put("/:commentID",updateCommentController);

commentRoutes.delete("/:commentID",deleteCommentController);

export default commentRoutes;