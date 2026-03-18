import { NextFunction, Request, Response } from "express";

import {
  refreshTokenService,
  signinService,
  singupService,
} from "../services/auth.services";

import { HttpError } from "types/HttpError";

import { validateSecurePassword } from "utils/auth.utils";

import errors from "constants/errors";

export const singupWithEmailAndPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    const emailRegex = validateSecurePassword(password);

    if (!emailRegex) {
      throw new HttpError(400, errors.insecurePassword);
    }

    const response = await singupService(email, password);

    res.locals.data = response;

    next();
  } catch (error) {
    throw new HttpError(
      400,
      error instanceof Error ? error.message : errors.unknownError,
    );
  }
};

export const singninWithEmailAndPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  try {
    const session = await signinService(email, password);

    res.locals.data = session;

    next();
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const signout = async (req: Request, res: Response) => {
  res.json({ success: true });
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { refreshToken } = req.body;

  try {
    const session = await refreshTokenService(refreshToken);

    res.locals.data = session;

    next();
  } catch (error) {
    throw new HttpError(
      400,
      error instanceof Error ? error.message : errors.unknownError,
    );
  }
};
