import { Router } from "express";
import { loginUserController } from "../controllers/users.controller";

const loginRoutes = Router();

loginRoutes.post("", loginUserController);

export default loginRoutes;