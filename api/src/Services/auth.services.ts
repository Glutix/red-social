import { User } from "../models/user.model";
import { Login, UserProps } from "../types/types";
import { encryptPassword, verifyPassword } from "../utils/bcryptHandle";
import { generateToken } from "../utils/jwtHandle";

//TODO: AUTH
export const createUser = async (userInput: UserProps): Promise<User> => {
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

    const hashedPassword = await encryptPassword(password);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthdate,
      image,
      description,
    } as User);

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const userCredentials = async (userData: Login) => {
  try {
    const userExist = await User.findOne({
      where: {
        email: userData.email,
      },
    });

    //? Validacion user
    if (!userExist?.email) {
      throw new Error(
        `El email: ${userData.email}, no se encuentra registrado.`
      );
    }

    //? Comparamos password
    const passwordHash = userExist.password;
    const isCorrect = await verifyPassword(userData.password, passwordHash);

    //? si no coincide
    if (!isCorrect) throw new Error("contraseña incorrecta");

    //? generamos el token
    const token = await generateToken(userExist);

    const data = {
      token,
      user: userExist,
    };

    return data;
  } catch (error) {
    throw error;
  }
};
