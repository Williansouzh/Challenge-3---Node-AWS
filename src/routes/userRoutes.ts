import UserController from "@/controllers/userController";
import Router from "express";

const router = Router();

router.post("/user/sign-up", UserController.signUp);

export default router;
