import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import validateResult from "../Middleware/validateResult";

const validateCreateUser = [
  check("firstName").exists().not().isEmpty().isLength({ min: 3, max: 10 }),

  check("lastName").exists().not().isEmpty().isLength({ min: 3, max: 10 }),

  check("password").exists().isAlphanumeric(),

  check("birthdate").exists().not().isEmpty(),

  check("email").exists().isEmail(),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export default validateCreateUser;
