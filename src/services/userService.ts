import UserModel from "@/database/models/userModel";
import IUser from "@/interfaces/userInterface";

class UserService {
  static async checkEmailExist(email: string): Promise<boolean> {
    try {
      const existingEmail = await UserModel.findOne({ email });
      return !!existingEmail;
    } catch (error) {
      console.error("Error checking email existence:", error);
      throw new Error("An error occurred while checking email existence");
    }
  }
  static async signUp(userData: IUser) {
    try {
      await UserModel.create(userData);
    } catch (error) {
      console.log(error);
    }
  }
  static async signIn() {}
}

export default UserService;
