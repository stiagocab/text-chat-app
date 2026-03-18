import express from "express";

import {
  refreshToken,
  signout,
  singninWithEmailAndPassword,
  singupWithEmailAndPassword,
} from "controllers/auth.controller";
import { responseHandler } from "middlewares/response.mdw";

const authRouter = express.Router();

authRouter.post("/signup", singupWithEmailAndPassword, responseHandler);

authRouter.post("/signin", singninWithEmailAndPassword, responseHandler);

authRouter.get("/signout", signout, responseHandler);

authRouter.get("/refresh-token", refreshToken, responseHandler);

export default authRouter;
