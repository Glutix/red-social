import { Response, Request, NextFunction } from "express";

const cors = (req: Request, res: Response, next: NextFunction) => {
  const domain = "http://localhost:3000";
  res.header("Access-Control-Allow-Origin", domain);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
};

export default cors;
