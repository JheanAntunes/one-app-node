import { Router } from "express";
import { UserController } from "./Controllers/UserController";

export const router = Router();

const userController = new UserController();

router.post("/user", userController.createUser);

router.get("/user", userController.getAllUsers);
