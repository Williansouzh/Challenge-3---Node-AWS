import UserModel from "../database/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserService from "../services/userService";
import { ApiError, UnauthorizedError } from "../helpers/api-errors";
import IUser from "../interfaces/userInterface";

dotenv.config();

jest.mock("bcrypt");
jest.mock("../database/models/userModel");
jest.mock("jsonwebtoken");
describe("Testing user service", () => {
  const userData = {
    firstName: "juus",
    lastName: "Silva",
    birthDate: new Date("1990-05-15"),
    city: "São Paulo",
    country: "Brasil",
    email: "ads.silva@example.com",
    password: "senha123",
    confirmPassword: "senha123",
  };

  beforeAll(async () => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("Should check if email exists", async () => {
    (UserModel.findOne as jest.Mock).mockResolvedValue(null);

    const result = await UserService.checkEmailExist(userData.email);
    expect(result).toBe(false);

    expect(UserModel.findOne).toHaveBeenCalledWith({ email: userData.email });
  });

  it("Should sign up a new user", async () => {
    (UserModel.create as jest.Mock).mockResolvedValueOnce({} as IUser);

    await UserService.signUp(userData);

    expect(UserModel.create).toHaveBeenCalledWith(userData);
  });

  it("Should sign in a user", async () => {
    const user = {
      _id: "123",
      email: userData.email,
      password: await bcrypt.hash(userData.password, 10),
    };

    (UserModel.findOne as jest.Mock).mockResolvedValue(user);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    (jwt.sign as jest.Mock).mockReturnValue("mockedToken");

    const token = await UserService.signIn(userData.email, userData.password);
    expect(UserModel.findOne).toHaveBeenCalledWith({ email: userData.email });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      userData.password,
      user.password
    );
    expect(jwt.sign).toHaveBeenCalledWith(
      { userId: user._id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1h" }
    );

    expect(token).toBe("mockedToken");
  });
});
