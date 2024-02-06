import { Response, Request } from "express";
import { createUser, userCredentials } from "../services/auth.services";
import { Login } from "../types/user.types";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;
    const newUser = await createUser(userInput);

    return res
      .status(200)
      .json({ message: "Usuario creado correctamente.", data: newUser });
  } catch (error: any) {
    return res.status(400).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const userData: Login = req.body;
    const data = await userCredentials(userData);
    res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json(error);
  }
};
