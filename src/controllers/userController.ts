import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import UserService from "@/services/userService";
import { BadRequestError } from "@/helpers/api-errors";
import IUser from "@/interfaces/userInterface";

class UserController {
  static async signUp(req: Request, res: Response, next: NextFunction) {
    const {
      firstName,
      lastName,
      birthDate,
      city,
      country,
      email,
      password,
      confirmPassword,
    } = req.body;

    try {
      const emailExists = await UserService.checkEmailExist(email);
      if (emailExists) {
        throw new BadRequestError("Email already exists");
      }

      if (password !== confirmPassword) {
        throw new BadRequestError("Divergent passwords");
      }

      const newUser: IUser = {
        firstName,
        lastName,
        birthDate,
        city,
        country,
        email,
        password: await bcrypt.hash(password, 10),
      };

      await UserService.signUp(newUser);

      return res.status(201).json({ message: "User created" });
    } catch (error) {
      next(error);
    }
  }

  static async signIn(req: Request, res: Response) {}
}

export default UserController;
