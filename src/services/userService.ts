import UserModel from "@/database/models/userModel";
import { ApiError } from "@/helpers/api-errors";
import IUser from "@/interfaces/userInterface";

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

  static async signIn() {}
}

export default UserService;
