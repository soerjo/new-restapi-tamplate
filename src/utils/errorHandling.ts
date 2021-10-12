import { Request, Response, NextFunction } from "express";

export const errorHandling = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error("not Found!");
  res.status(404).send({
    message: error.message,
  });
};
