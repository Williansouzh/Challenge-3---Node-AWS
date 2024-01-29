import { BadRequestError, UnauthorizedError } from "../helpers/api-errors";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import IUser from "../interface/Iuser";
import UserModel from "../database/models/userModel";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}
dotenv.config();

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError("Not authorized");
  }

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY ?? ""
  ) as JwtPayload;
  const user = await UserModel.findById(id);

  if (!user) {
    throw new UnauthorizedError("Not authorized");
  }

  const { password: _, ...loggedUser } = user;

  req.user = loggedUser;

  next();
};
