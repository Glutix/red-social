import { Comment } from "../models/comment.model";
import { CommentProps } from "../types/comment.types";

export const createComment = async (
  commentInput: CommentProps
): Promise<Comment> => {
  //! Lógica para crear un nuevo comentario en la base de datos
  try {
    const { content, images, userID, postID } = commentInput;

    if (!content && !images) {
      throw new Error("Un comentario debe contener al menos texto o imágenes.");
    } else if (!userID) {
      throw new Error("No puedes crear un comentario si no iniciaste sesión.");
    } else if (!postID) {
      throw new Error("El comentario debe estar asociado a una publicación.");
    }

    const newComment = await Comment.create({
      content,
      images,
      userID,
      postID,
    } as Comment);

    return newComment;
  } catch (error) {
    throw error;
  }
};

export const getCommentsByPostId = async (
  postID: number
): Promise<Comment[]> => {
  //! Lógica para obtener todos los comentarios de una publicación (postID)
  try {
    const comments = await Comment.findAll({ where: { postID: postID } });
    return comments;
  } catch (error) {
    throw error;
  }
};

export const getCommentById = async (
  commentID: number
): Promise<Comment | null> => {
  //! Lógica para obtener un comentario de una publicación (commentID)
  try {
    const comment = await Comment.findByPk(commentID);

    if (!comment) {
      throw new Error(`No existe comentario con el id ${commentID}`);
    }
    return comment;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (
  commentID: number,
  commentInput: Partial<CommentProps>
): Promise<Comment> => {
  try {
    const comment = await Comment.findByPk(commentID);

    if (!comment) {
      throw new Error(`No existe el comentario con el id ${commentID}`);
    }

    //! Actualiza las propiedades si se proporcionan en el commentInput
    comment.content = commentInput.content || comment.content;

    comment.images = commentInput.images || comment.images;

    //! Guarda el comentario actualizado
    await comment.save();

    return comment;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentID: number): Promise<boolean> => {
  try {
    const deletedRows = await Comment.destroy({ where: { commentID } });
    return deletedRows > 0;
  } catch (error) {
    throw error;
  }
};
