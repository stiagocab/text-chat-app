import express from "express";
import { auth } from "express-openid-connect";

import mainRouter from "routes/main.router";

import { errorHandler } from "middlewares/error.mdw";
import auth0Config from "clients/auth0.client";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(auth(auth0Config));

app.use("/api", mainRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
