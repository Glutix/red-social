//! imports library
import { Request, Response } from "express";
import express from "express";

//! Modulos
import userRoutes from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import postRouter from "./routes/posts.routes";
import commentRouter from "./routes/comment.routes";

const server = express();

//! Midleware
server.use(express.json());

//! Routes
server.get("/", (req: Request, res: Response) => {
  return res.send("Hola mundo2");
});

server.use("/users", userRoutes);
server.use("/auth", authRouter);
server.use("/post", postRouter);
server.use("/comment", commentRouter);

export default server;
