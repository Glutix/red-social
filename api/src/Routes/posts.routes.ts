import { Router } from "express";
import { 
  createPostController, 
  getAllPost, 
  getPostsByUserController, 
  deletePostController, 
  updatePostController} from "../Controllers/post.controller";

const postRoutes = Router();

postRoutes.post("/", createPostController);

postRoutes.get("/", getAllPost);

postRoutes.get("/:userId", getPostsByUserController);

postRoutes.delete("/:postId", deletePostController);

postRoutes.put("/:postId", updatePostController);

export default postRoutes;