import { Request, Response } from "express";
import { getList } from "../Services/user.services";
import { deleteOneUser } from "../Services/user.services";
import { createNewUser } from "../Services/user.services";

export const getUser = async (_req: Request, res: Response) => {
  try {
    const users = getList();
    return res.status(200).send(users)
  } catch (error: any) {
    return res.status(error?.status || 500).send({error: error?.message || error})
  }
}



export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = createNewUser(userData);
    return res
            .status(200)
            .json({ message: "Usuario creado correctamente.", data: newUser});
  } catch (error: any) {
    return res
            .status(error?.status || 500)
            .json({ message: "Hubo un error", error: error?.message || error});
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const answer = await deleteOneUser(Number(id));
    
    if (!answer){
      throw ({ status: 404, message: 'No se ha encontrado el usuario' })
    }

    return res.status(200).send({message: "se borro"})
    
  } catch (error: any) {
    return res.status(error?.status || 500).send({error: error?.message || error})
  }
}