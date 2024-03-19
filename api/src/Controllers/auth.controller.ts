import { Response, Request } from "express";
import { createUser, userCredentials } from "../services/auth.services";
import { Login } from "../types/user.types";
import { STATUS_CODE } from "../constants/constants";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;
    await createUser(userInput);
    return res
      .status(STATUS_CODE.CREATED)
      .json({ message: "Usuario creado correctamente." });
  } catch (error: any) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const userData: Login = req.body;
    const data = await userCredentials(userData);

    return res
      .status(STATUS_CODE.OK)
      .cookie("token", data.token, {
        expires: new Date(Date.now() + 24 * 3600000),
        httpOnly: true,
      })
      .json({ message: "Inicio de secion correctamente." });
  } catch (error: any) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(error);
  }
};
