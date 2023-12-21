import { User } from "../Models/user.model";

//! Interfaces
import { UserInput } from "../Interaces/user.interfaces";

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

export const createNewUser = async (userInput: UserInput): Promise<User> => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      birthdate,
      image,
      description,
    } = userInput;

    if (!firstName || !lastName || !email || !password || !birthdate) {
      throw new Error("Falto informacion para crear el usuario.");
    }
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error("Ya existe un usuario con este correo electrónico");
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      birthdate,
      image,
      description,
    } as User);

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const deleteOneUser = async (id: number) => {
  try {
    const deleteUser = await User.destroy({ where: { userID: id } });

    if (!deleteUser) {
      throw Error;
    }
    return `Usuario eliminado con exito`;
  } catch (error) {
    return error;
  }
};
