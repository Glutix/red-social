import { User } from "../models/user.model";
import { Login, UserProps } from "../types/user.types";
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

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw [
        {
          path: ["email"],
          message: "Ya existe un usuario con este correo electrónico",
        },
      ];
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
      throw [
        {
          path: ["email"],
          message: `El email: ${userData.email}, no se encuentra registrado.`,
        },
      ];
    }

    //? Comparamos password
    const passwordHash = userExist.password;
    const isCorrect = await verifyPassword(userData.password, passwordHash);

    //? si no coincide
    if (!isCorrect) {
      throw [
        {
          path: ["password"],
          message: "Contraseña incorrecta",
        },
      ];
    }

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
