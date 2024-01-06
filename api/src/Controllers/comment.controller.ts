import { Request, Response } from 'express';
import {
  createComment,
  getCommentsByPostId,
  getCommentById,
  updateComment,
  deleteComment,
} from '../Services/comment.services';
import { CommentProps } from '../Types/types';

export const createCommentController = async (req: Request, res: Response) => {
  //! Lógica para crear un nuevo comentario
  try {
    const commentInput = req.body as CommentProps;

    const newComment = await createComment(commentInput);

    return res
      .status(200)
      .json({ message: 'Comentario creado correctamente.', data: newComment });
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .json({ message: 'Hubo un error', error: error?.message || error });
  }
};

export const getCommentsByPostIdController = async (req: Request, res: Response) => {
  //! Lógica para obtener todos los comentarios de una publicación
  try {
    const { postID } = req.params;
    const comments = await getCommentsByPostId(Number(postID));

    return res.status(200).send(comments);
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .send({ error: error?.message || error });
  }
};

export const getCommentByIdController = async (req: Request, res: Response) => {
  try {
    const { commentID } = req.params;
    const comment = await getCommentById(Number(commentID));

    return res.status(200).send(comment);
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .send({ error: error?.message || error });
  }
};

export const updateCommentController = async (req: Request, res: Response) => {
  try {
    const { commentID } = req.params;
    const commentInput = req.body as Partial<CommentProps>;

    const updatedComment = await updateComment(Number(commentID), commentInput);

    return res.status(200).json({
      message: 'Comentario actualizado correctamente',
      data: updatedComment,
    });
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .json({ error: error?.message || error });
  }
};

export const deleteCommentController = async (req: Request, res: Response) => {
  try {
    const { commentID } = req.params;
    const deleted = await deleteComment(Number(commentID));

    if (deleted) {
      return res.status(200).json({ message: 'Comentario eliminado correctamente' });
    } else {
      throw { status: 404, message: 'No se encontró el comentario' };
    }
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .json({ error: error?.message || error });
  }
};