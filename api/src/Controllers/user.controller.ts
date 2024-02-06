import { Request, Response } from "express";
import {
  getUsers,
  getUserById,
  deleteOneUser,
  updateUser,
} from "../services/user.services";
import { UserProps } from "../types/user.types";

export const getAllUser = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).send(users);
  } catch (error: any) {
    return res.status(error?.status || 500).json(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await getUserById(Number(userId));
    return res.status(200).send(user);
  } catch (error: any) {
    return res.status(error?.status || 500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const answer = await deleteOneUser(Number(id));

    res.status(200).send(answer);
  } catch (error: any) {
    return res.status(error?.status || 500).json(error);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const userInput: UserProps = req.body;

  try {
    const updatedUser = await updateUser(Number(userId), userInput);

    return res.status(200).json({
      message: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error: any) {
    return res.status(error?.status || 500).json(error);
  }
};
