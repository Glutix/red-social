import { User } from "../Models/user.model";

//? Interfaces
import { UserData } from "../Interaces/user.interfaces";


export const getList = async () => { 
  try {
    const users: User[] = await User.findAll();
    return users
  } catch (error) {
    return error
  }
}

export const createNewUser = async (userData: UserData) => { 
  try {
    const { firstName, lastName, email, password, birthdate } = userData;

    if (!firstName || !lastName || !email || !password || !birthdate) {
      throw new Error("Falto informacion para crear el usuario.");
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error("Ya existe un usuario con este correo electrónico");
    }

    const newUser = await User.create(userData);

    return newUser;

  } catch (error) {
    throw error;
  }
}


export const deleteOneUser = async (id: number) => {
  try {
    const deleteUser = await User.destroy({ where: { userID: id } });

    if (!deleteUser){
      throw Error;
    }
    return `Usuario eliminado con exito`;
  } catch (error) {
    return error;
  }
}

