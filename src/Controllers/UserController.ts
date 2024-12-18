import { Request, Response } from "express";
import { UserService } from "../Services/UserService";

export class UserController {
  createUser = (req: Request, res: Response) => {
    const body = req.body;
    const userService: UserService = new UserService();
    userService.createUser(body);
    res.status(201).json({ message: "usuario criado." });
  };

  getAllUsers = (req: Request, res: Response) => {
    const userService: UserService = new UserService();
    const users = userService.getAllUsers();
    res.status(200).json({ message: "OK", users });
  };
}
