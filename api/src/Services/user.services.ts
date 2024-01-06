import { User } from "../Models/user.model";
import { encryptPassword, verifyPassword } from "../Utils/bcryptHandle";
import { generateToken } from "../Utils/jwtHandle";

//! Interfaces
import { Login, UserProps } from "../Types/types";

export const getUsers = async () => {
	try {
		const users = await User.findAll();
		return users;
	} catch (error) {
		throw error;
	}
};

export const getUserById = async (userId: number) => {
	try {
		const existingUser = await User.findByPk(userId);

		if (existingUser === null)
			throw new Error(`No existe un usuario con el id ${userId}`);
		return existingUser;
	} catch (error) {
		throw error;
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
		const hashedPassword = await encryptPassword(userInput.password)

		if (!user) {
			throw new Error(`No existe un usuario con el id ${userId}`);
		}

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

//TODO: AUTH
export const createNewUser = async (userInput: UserProps): Promise<User> => {
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
			throw new Error(`El email: ${userData.email}, no se encuentra registrado.`)
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
