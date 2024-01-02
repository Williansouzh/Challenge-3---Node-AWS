import UserController from "@/controllers/userController";
import { validateUserData } from "@/controllers/validator/signUpValidator";
import { handleJoiValidationError } from "@/middlewares/handleJoiValidationError ";
import Router from "express";

const userRoutes = Router();

userRoutes.post("/user/sign-up", validateUserData, UserController.signUp);
userRoutes.use(handleJoiValidationError);
export default userRoutes;
