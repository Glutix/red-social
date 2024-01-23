import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import viewError from "../utils/viewError";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(404).json(viewError(error));
      }
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  };
