import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import { Post } from "../models/post.model";
import { Comment } from "../models/comment.model";
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
  models: [User, Post, Comment],
  logging: (msg) => !msg.includes("Executing"),
});

export default database;
