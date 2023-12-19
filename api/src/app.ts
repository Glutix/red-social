import { Request, Response } from "express";

//! imports library
const express = require("express");

const server = express();

//! Midleware
server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  return res.send("Hola mundo2")
});


export default server;
