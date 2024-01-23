import { sign, verify } from "jsonwebtoken";
import { UserProps } from "../types/user.types";
const SECRET_KEY = process.env.SECRET_KEY || "token-random";

const generateToken = async (user: UserProps) => {
  const jwt = sign({ user }, SECRET_KEY, { expiresIn: "6h" });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isUser = verify(jwt, SECRET_KEY);
  return isUser;
};

export { generateToken, verifyToken };
