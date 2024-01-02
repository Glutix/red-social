import { Request, Response } from "express";
import {
	getUsers,
	getUserById,
	deleteOneUser,
	createNewUser,
	updateUser,
} from "../Services/user.services";
import { UserProps } from "../Types/types";
import { User } from "../Models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUser = async (_req: Request, res: Response) => {
	try {
		const users = await getUsers();
		return res.status(200).send(users);
	} catch (error: any) {
		return res
			.status(error?.status || 500)
			.send({ error: error?.message || error });
	}
};

export const getOneUser = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const user = await getUserById(Number(userId));
		return res.status(200).send(user);
	} catch (error: any) {
		return res
			.status(error?.status || 500)
			.send({ error: error?.message || error });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const UserInput = req.body;

		const newUser = await createNewUser(UserInput);

		return res
			.status(200)
			.json({ message: "Usuario creado correctamente.", data: newUser });
	} catch (error: any) {
		return res
			.status(error?.status || 500)
			.json({ message: "Hubo un error", error: error?.message || error });
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const answer = await deleteOneUser(Number(id));

		if (!answer) {
			throw { status: 404, message: "No se ha encontrado el usuario" };
		}

		return res.status(200).json({ message: "Usuario eliminado correctamente" });
	} catch (error: any) {
		return res
			.status(error?.status || 500)
			.json({ error: error?.message || error });
	}
};

export const updateUserById = async (req: Request, res: Response) => {
	const { userId } = req.params;
	const userInput: UserProps = req.body;

	try {
		const updatedUser = await updateUser(Number(userId), userInput);
		return res.status(200).json({
			message: "Usuario actualizado correctamente",
			data: updatedUser,
		});
	} catch (error: any) {
		return res
			.status(error?.status || 500)
			.json({ error: error?.message || error });
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const usuario = await User.findOne({ where: { email } });

		if (!usuario) {
			throw new Error("El email " + email + " no se encuentra registrado.")
		} else {
			const userPassword = usuario.password;
			// Comparamos password
			bcrypt.compare(password, userPassword).then((result) => {
				if (result) {
					//login exitoso -- generamos el token
					const token = jwt.sign({
						email: email
					}, process.env.SECRET_KEY || "pepito", {
						expiresIn: "60000"
					})

					res.json({ token })
				} else {
					// Password incorrecto
					res.json({ msg: "contraseña incorrecta" })
				}
			})
		}
	} catch (error: any) {
		return res
			.status(error?.status || 500)
			.json({ error: error?.message || error });
	}

}
