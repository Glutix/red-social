import { hash, compare } from "bcrypt";

const encryptPassword = async (password: string): Promise<string> => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const verifyPassword = async (password: string, passwordHash: string) => {
  const isCorrect = await compare(password, passwordHash);
  return isCorrect;
};

export { encryptPassword, verifyPassword };