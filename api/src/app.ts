//! imports library
import { Request, Response } from "express";
import express from "express";

//! Modulos
import userRoutes from "./Routes/user.routes";
import postRoutes from "./Routes/posts.routes";
import commentRoutes from "./Routes/comment.routes";

const server = express();

//! Midleware
server.use(express.json());

//! Routes
server.get("/", (req: Request, res: Response) => {
  return res.send("Hola mundo2");
});

server.use("/users", userRoutes);
server.use("/post", postRoutes);
server.use("/comment", commentRoutes);

export default server;
