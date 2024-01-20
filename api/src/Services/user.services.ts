import { User } from "../models/user.model";
import { encryptPassword } from "../utils/bcryptHandle";

//! Interfaces
import { UserProps /* Login */ } from "../types/types";

export const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    return error;
  }
};

export const getUserById = async (userId: number) => {
  try {
    const existingUser = await User.findByPk(userId);

    if (existingUser === null)
      throw new Error(`No existe un usuario con el id ${userId}`);
    return existingUser;
  } catch (error) {
    return error;
  }
};

export const deleteOneUser = async (id: number) => {
  try {
    const deleteUser = await User.destroy({ where: { userID: id } });

    if (!deleteUser) {
      throw new Error("No se ha encontrado el usuario");
    }

    return true; // Devuelve true si la eliminación fue exitosa
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (
  userId: number,
  userInput: UserProps
): Promise<User> => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error(`No existe un usuario con el id ${userId}`);
    }

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

    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};
