import express from "express";

import mainRouter from "routes/main.router";

import { errorHandler } from "middlewares/error.mdw";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", mainRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
