import { Router } from "express";
import UserController from "../controllers/userController";
const route = Router();

route.post("/user/sign-up", UserController.signUp);

export default route;
