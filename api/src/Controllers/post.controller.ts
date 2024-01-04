import { Request, Response } from "express";
import { createPost, getPosts, getPostsByUserId, deletePost, updatePost } from "../Services/post.services";

export const createPostController = async (req: Request, res: Response) => {
  try {
    const PostInput = req.body;

    const newPost = await createPost(PostInput);

    return res
			.status(200)
			.json({ message: "Publicación creada correctamente.", data: newPost });
  } catch (error:any) {
    return res
			.status(error?.status || 500)
			.json({ message: "Hubo un error", error: error?.message || error });
  }
}

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
		return res.status(200).send(posts);
  } catch (error:any) {
    return res
			.status(error?.status || 500)
			.send({ error: error?.message || error });
  }
}

export const getPostsByUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const posts = await getPostsByUserId(Number(userId));
    return res.status(200).send(posts);
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .send({ error: error?.message || error });
  }
}

export const deletePostController = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const deleted = await deletePost(Number(postId));
    if (deleted) {
      return res.status(200).json({ message: "Publicación eliminada correctamente" });
    } else {
      throw { status: 404, message: "No se encontró la publicación" };
    }
  } catch (error: any) {
    return res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

export const updatePostController = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const postInput = req.body;

    const updatedPost = await updatePost(Number(postId), postInput);

    return res.status(200).json({
      message: "Publicación actualizada correctamente",
      data: updatedPost,
    });
  } catch (error: any) {
    return res.status(error?.status || 500).json({ error: error?.message || error });
  }
};