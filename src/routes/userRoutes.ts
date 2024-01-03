import UserController from "@/controllers/userController";
import { validateLoginData } from "@/controllers/validator/signInValidator";
import { validateUserData } from "@/controllers/validator/signUpValidator";
import { handleJoiValidationError } from "@/middlewares/handleJoiValidationError ";
import Router from "express";

const userRoutes = Router();

userRoutes.post("/user/sign-up", validateUserData, UserController.signUp);

userRoutes.post("/user/sign-in", validateLoginData, UserController.signIn);
userRoutes.use(handleJoiValidationError);
export default userRoutes;
