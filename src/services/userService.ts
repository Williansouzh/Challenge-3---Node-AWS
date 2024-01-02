import UserModel from "@/database/models/userModel";
import IUser from "@/interfaces/userInterface";

class UserService {
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
