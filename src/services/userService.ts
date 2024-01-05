import UserModel from "../database/models/userModel";
import jwt from "jsonwebtoken";
import { ApiError, UnauthorizedError } from "../helpers/api-errors";
import IUser from "../interfaces/userInterface";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
class UserService {
  static async checkEmailExist(email: string): Promise<boolean> {
    const existingEmail = await UserModel.findOne({ email });

    if (existingEmail) {
      throw new ApiError(
        "Email already exists",
        400,
        "validation error",
        email
      );
    }

    return false;
  }

  static async signUp(userData: IUser) {
    try {
      await UserModel.create(userData);
    } catch (error) {
      throw new ApiError(
        "Error occurred while creating user",
        500,
        "internal error",
        "Email"
      );
    }
  }
  static async signIn(email: string, password: string) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new UnauthorizedError("No user found or invalid password");
      }
      const userAllowed = await bcrypt.compare(password, user.password);
      if (userAllowed) {
        const token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: "1h" }
        );
        return token;
      } else {
        throw new UnauthorizedError("No user found or invalid password");
      }
    } catch (error) {
      console.error(error);
      throw new UnauthorizedError("Error during sign in");
    }
  }
}

export default UserService;
