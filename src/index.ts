import express, { Request, Response } from "express";
import { UserController } from "./Controllers/UserController";
import { router } from "./routes";

//init server
const server = express();

server.use(express.json());
server.use(router);

// rota method get
server.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "OK" });
});

server.listen(5000, () => {});
