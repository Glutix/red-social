import { User } from "../models/user.model";
import { encryptPassword } from "../utils/bcryptHandle";
import { apiError } from "../utils/apiError";

//! Interfaces
import { UserProps /* Login */ } from "../types/user.types";

export const getUsers = async () => {
  try {
    const users = await User.findAll();

    if (!users) {
      throw apiError("users", "Algo salio mal...");
    }

    return users;
  } catch (error) {
    return error;
  }
};

export const getUserById = async (userId: number): Promise<User> => {
  try {
    const existingUser = await User.findByPk(userId);
    if (!existingUser) {
      throw apiError("users", `No existe un usuario con el id ${userId}`);
    }

    return existingUser;
  } catch (error: any) {
    return error;
  }
};

export const deleteOneUser = async (id: number) => {
  try {
    const user = await getUserById(id);
    user.isDeleted = true;
    await user.save();
    return { message: "Usuario borrado correctamente." };
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userInfo: User, userInput: UserProps) => {
  try {
    const user = await getUserById(userInfo.userID);

    const hashedPassword = userInput?.password
      ? await encryptPassword(userInput.password)
      : null;

    //? Combina las propiedades de userInput en user
    Object.assign(user, userInput);

    if (hashedPassword) {
      user.dataValues.password = hashedPassword;
    }

    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};
