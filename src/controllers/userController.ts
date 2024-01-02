import UserModel from "@/database/models/userModel";
import IUser from "@/interfaces/userInterface";
import UserService from "@/services/userService";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
class UserController {
  static async signUp(req: Request, res: Response) {
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
        return res.status(400).json("Email already exists");
      }
      if (password !== confirmPassword) {
        return res.status(400).json("divergent passwords");
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
      return res.status(201).json("User created");
    } catch (error) {}
  }
  static async signIn() {}
}

export default UserController;
