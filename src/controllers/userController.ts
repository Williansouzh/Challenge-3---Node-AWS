import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserService from "../services/userService";
import { BadRequestError } from "../helpers/api-errors";
import IUser from "../interface/Iuser";
import UserModel from "../database/models/userModel";
interface SignUpRequest extends Request {
  body: {
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    country: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

interface SignInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

class UserController {
  static async signUp(req: SignUpRequest, res: Response, next: NextFunction) {
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
        birthDate: new Date(birthDate),
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

  static async signIn(req: SignInRequest, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        throw new BadRequestError("Email or password invalid");
      }

      const verifyPass = await bcrypt.compare(password, user.password);

      if (!verifyPass) {
        throw new BadRequestError("Email or password invalid");
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET_KEY ?? "",
        {
          expiresIn: "8h",
        }
      );

      const { firstName, lastName, email: string } = user.toObject();

      return res.json({
        user: { firstName, lastName, email },
        token,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
