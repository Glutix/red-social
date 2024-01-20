import { Response, Request } from "express";
import { createUser, userCredentials } from "../services/auth.services";
import { Login } from "../types/types";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;

    const newUser = await createUser(userInput);

    return res
      .status(200)
      .json({ message: "Usuario creado correctamente.", data: newUser });
  } catch (error: any) {
    return res
      .status(error?.status || 500)
      .json({ message: "Hubo un error", error: error?.message || error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const userData: Login = req.body;

    if (!userData.email || !userData.password) {
      throw new Error("Faltan datos");
    }
    const data = await userCredentials(userData);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};
