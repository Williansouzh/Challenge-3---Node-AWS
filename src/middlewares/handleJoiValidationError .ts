import { Request, Response, NextFunction } from "express";

export const handleJoiValidationError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status === 400 && err.message) {
    return res.status(400).json({ error: err.message });
  }

  next(err);
};
