import { Post } from "../models/post.model";
import { PostProps } from "../types/types";

export const createPost = async (postInput: PostProps): Promise<Post> => {
  //! Lógica para crear una nueva publicación en la base de datos
  try {
    const { content, images, userID } = postInput;

    if (!content) {
      throw new Error("No puedes crear una publicación sin un mensaje.");
    } else if (!userID) {
      throw new Error(
        "No puedes crear una publicación si no iniciaste sesión."
      );
    }

    const newPost = await Post.create({
      content,
      images,
      userID,
    } as Post);

    return newPost;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  //! Lógica para obtener todas las publicaciones de la base de datos
  try {
    const posts = await Post.findAll();
    return posts;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUserId = async (userId: number) => {
  //! Lógica para obtener todas las publicaciones de un usuario (userID)
  try {
    const userPosts = await Post.findAll({
      where: { userID: userId },
    });

    if (!userPosts || userPosts.length === 0) {
      throw new Error(
        `No existen publicaciones para el usuario con el id ${userId}`
      );
    }

    return userPosts;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId: number) => {
  try {
    const deletePost = await Post.destroy({ where: { postID: postId } });
    if (!deletePost) {
      throw new Error("No se ha encontrado la publicación");
    }
    // return true;
    return deletePost > 0;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  postId: number,
  postInput: Partial<PostProps>
): Promise<Post> => {
  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error(`No existe la publicación con el id ${postId}`);
    }

    //! Actualiza las propiedades si se proporcionan en el postInput
    post.content = postInput.content || post.content;
    post.images = postInput.images || post.images;

    //! Guarda la publicación actualizada
    await post.save();

    return post;
  } catch (error) {
    throw error;
  }
};
