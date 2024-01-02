import { User } from "../Models/user.model";
import bcrypt from "bcrypt";
//! Interfaces
import { UserInput, /* Login */ } from "../Interaces/user.interfaces";

export const getUsers = async () => {
	try {
		const users = await User.findAll();
		return users;
	} catch (error) {
		return error;
	}
};

/* export const loginUser = async (Login: Login) => {
	try {
		const user = await User.findOne({ where: { email } });
	} catch (error) {}
}; */

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
		const hashedPassword = await bcrypt.hash(userInput.password, 10);
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
	userInput: UserInput
): Promise<User> => {
	try {
		const user = await User.findByPk(userId);
		const hashedPassword = await bcrypt.hash(userInput.password, 10);

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
