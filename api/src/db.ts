import { Sequelize } from "sequelize-typescript";
import { User } from "./Models/user.model";
import { Post } from "./Models/post.model"
import { Comment } from "./Models/comment.model";
import dotenv from "dotenv";
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT) {
  throw new Error("Falta alguna variable de entorno requerida");
}

const database = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "mysql",
  models: [User, Post, Comment ], // Ruta a tus modelos
});

export default database;
