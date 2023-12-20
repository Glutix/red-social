import { Request, Response } from "express";

// rutas
import userRoutes from "./Routes/user.route";

//! imports library
const express = require("express");

const server = express();

//! Midleware
server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  return res.send("Hola mundo2")
});

// rutas
server.use("/user", userRoutes);

export default server;
