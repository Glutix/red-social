import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtHandle";

const checkSession = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers["authorization"];
  if (!headerToken) {
    return res
      .status(401)
      .json({ error: "No se proporcionó un token de autenticación" });
  }

  try {
    if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
      //Tiene token
      /* Extraer token 1
      const bearerToken = headerToken.split(" ");
      console.log(bearerToken[1]); */

      //? Extraer token 2
      const bearerToken = headerToken.slice(7);

      //? Verificar si el token es valido
      const tokenValido = verifyToken(bearerToken);
      if (!tokenValido) {
        throw new Error("Su session ya expiro.");
      }
      next();
    } else {
      //? No tiene token
      throw new Error("Acesso Denegado.");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export default checkSession;
