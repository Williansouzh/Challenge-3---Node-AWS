import { Document } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  birthDate: Date;
  city: string;
  country: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export default IUser;
