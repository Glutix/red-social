//! imports library
import express from "express";
import cors from "./middleware/cors";

//! Modulos
import userRoutes from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import postRouter from "./routes/posts.routes";
import commentRouter from "./routes/comment.routes";

const server = express();

//! Midleware
server.use(express.json());
server.use(cors);

//! Routes
server.use("/users", userRoutes);
server.use("/auth", authRouter);
server.use("/post", postRouter);
server.use("/comment", commentRouter);

export default server;
