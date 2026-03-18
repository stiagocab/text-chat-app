import { Request, Response } from "express";

export const responseHandler = (req: Request, res: Response) => {
  res.status(res.statusCode || 200).json({
    success: true,
    data: res.locals.data ?? null,
  });
};
