import { NextFunction, Request, Response } from "express";

export type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => any | Promise<any>;

export const wrap =
  (handler: Handler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await handler(req, res, next);
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  };
