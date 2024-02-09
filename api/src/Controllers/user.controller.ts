import { Request, Response } from "express";
import {
  getUsers,
  getUserById,
  deleteOneUser,
  updateUser,
} from "../services/user.services";
import { UserProps } from "../types/user.types";
import { recoverToken } from "../utils/recoverToken";
import { verifyToken } from "../utils/jwtHandle";
import { User } from "../models/user.model";

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
  try {
    const headerToken = req.headers["authorization"];
    const token = recoverToken(headerToken);
    const { user: userInfo } = verifyToken(token) as { user: User };
    const { userID } = userInfo;

    const answer = await deleteOneUser(Number(userID));

    res.status(200).send(answer);
  } catch (error: any) {
    return res.status(error?.status || 500).json(error);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const userInput: UserProps = req.body;
    const headerToken = req.headers["authorization"];
    const token = recoverToken(headerToken);
    const { user: userInfo } = verifyToken(token) as { user: User };

    const updatedUser = await updateUser(userInfo, userInput);

    return res.status(200).json({
      message: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error: any) {
    return res.status(error?.status || 500).json(error);
  }
};
