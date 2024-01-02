import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers["authorization"];
  
  if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
    //Tiene token
    /* Extraer token 1
    const bearerToken = headerToken.split(" ");
    console.log(bearerToken[1]); */
    // Extraer token 2
    const bearerToken = headerToken.slice(7);
    console.log(bearerToken);

    //Verificar si el token es valido
    try {
      const tokenValido = jwt.verify(bearerToken, process.env.SECRET_KEY || "pepito")
      console.log(tokenValido)
      next();
      
    } catch (error) {
      res.status(400).json({
        error: "Token no valido"
      })
    }
  } else {
    //No tiene token
    res.status(400).json({
      error: "Acceso denegado"
    })
  }
}

export default validateToken;