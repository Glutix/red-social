import { Router } from "express";
import {
  createPostController,
  getAllPost,
  getPostsByUserController,
  deletePostController,
  updatePostController,
} from "../controllers/post.controller";
import { schemaValidation } from "../middleware/schemaValidator";
import { postScheme } from "../schemas/post.schene";
import checkSession from "../middleware/checkSession";

const postRouter = Router();

postRouter.post(
  "/",
  checkSession,
  schemaValidation(postScheme),
  createPostController
);

postRouter.get("/", getAllPost);

postRouter.get("/:userId", getPostsByUserController);

postRouter.delete("/:postId", deletePostController);

postRouter.put("/:postId", updatePostController);

export default postRouter;
