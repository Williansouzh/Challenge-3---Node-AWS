// userModel.ts
import mongoose, { Schema } from "mongoose";
import IUser from "@/interfaces/userInterface";
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
