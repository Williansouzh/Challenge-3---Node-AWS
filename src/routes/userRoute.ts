import { Router } from "express";
import UserController from "../controllers/userController";
import { validateUserData } from "../controllers/validator/signUpValidator";
import { handleJoiValidationError } from "../middlewares/handleJoiValidationError ";
import { validateLoginData } from "../controllers/validator/signInValidator";
const route = Router();

route.post("/user/sign-up", validateUserData, UserController.signUp);

route.post("/user/sign-in", validateLoginData, UserController.signIn);
route.use(handleJoiValidationError);
export default route;
