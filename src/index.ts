import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';

import playerRouter from "./route.js";
import { check_connection } from "./config/postgres.js";

dotenv.config();
const port = process.env.PORT;

const app = express();

// Middlewares
app.use(cors());
app.use((req: Request, res: Response, next) => {
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    app.use(express.urlencoded({ extended: true }));
  }
  next();
});
app.use(morgan("dev"));
app.use(express.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log the error for debugging
  console.error(err.stack);

  // Send a generic error response to the client
  res.status(500).json({ error: "Something went wrong" });
  next();
});

app.use("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use("/players", playerRouter);

app.listen(port, () => {
  console.log("> Server is listening on port:", port);
});

check_connection();