import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.get("/admin/users", userController.findAll);
router.post("/users", userController.create);

export { router };
