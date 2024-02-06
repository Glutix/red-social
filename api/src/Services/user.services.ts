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
    const deleteUser = await User.destroy({ where: { userID: id } });

    if (!deleteUser) {
      throw apiError("users", "No se ha encontrado el usuario");
    }

    return { message: "Usuario borrado correctamente." };
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId: number, userInput: UserProps) => {
  try {
    const user = await getUserById(userId);

    const hashedPassword = await encryptPassword(userInput.password);

    // Actualiza las propiedades si se proporcionan en el userInput

    user.firstName = userInput.firstName || user.firstName;
    user.lastName = userInput.lastName || user.lastName;
    user.email = userInput.email || user.email;
    user.password = hashedPassword || user.password;
    user.birthdate = userInput.birthdate || user.birthdate;
    user.image = userInput.image || user.image;
    user.description = userInput.description || user.description;

    // Si se proporciona la propiedad isDeleted, realiza el borrado lógico
    if (userInput.isDeleted !== undefined) {
      user.isDeleted = userInput.isDeleted;
    }

    //await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};
