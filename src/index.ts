import express, { Request, Response } from "express";
import { UserController } from "./Controllers/UserController";

//init server
const server = express();

server.use(express.json());

// rota method get
server.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "OK" });
});

server.post("/user", (request: Request, response: Response) => {
  const body = request.body;
  console.log("body: ", body);
  const userController = new UserController();
  userController.createUser(request, response);
});

server.get("/user", (request: Request, response: Response) => {
  const userController = new UserController();
  userController.getAllUsers(request, response);
});

server.listen(5000, () => {});
