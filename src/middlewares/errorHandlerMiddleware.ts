import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../errors/custom-error";

// Middleware for error handling
const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).json({ msg: "Something went wrong." });
};

module.exports = errorHandlerMiddleware;
