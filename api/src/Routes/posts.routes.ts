import { Router } from "express";
import {
  createPostController,
  getAllPost,
  getPostsByUserController,
  deletePostController,
  updatePostController,
} from "../controllers/post.controller";

const postRouter = Router();

postRouter.post("/", createPostController);

postRouter.get("/", getAllPost);

postRouter.get("/:userId", getPostsByUserController);

postRouter.delete("/:postId", deletePostController);

postRouter.put("/:postId", updatePostController);

export default postRouter;
