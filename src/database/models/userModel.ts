import mongoose, { Document, Schema } from "mongoose";
import IUser from "../../interface/Iuser";
const userSchema = new Schema<IUser & Document>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: false },
});

const UserModel = mongoose.model<IUser & Document>("User", userSchema);

export default UserModel;
