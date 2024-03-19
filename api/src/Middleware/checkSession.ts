import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtHandle";
import { recoverToken } from "../utils/recoverToken";

const checkSession = (req: Request, res: Response, next: NextFunction) => {
  const coockieToken = req.headers.cookie;
  console.log(req.headers);
  if (!coockieToken) {
    return res
      .status(401)
      .json({ error: "No se proporcionó un token de autenticación" });
  }

  try {
    //? Extraer token de la coockie
    const token = recoverToken(coockieToken);

    if (!token) {
      //? No tiene token
      throw new Error("Acesso Denegado.");
    }

    //? Verificar si el token es valido
    const tokenValido = verifyToken(token);
    if (!tokenValido) {
      throw new Error("Su session ya expiro.");
    }

    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

export default checkSession;
