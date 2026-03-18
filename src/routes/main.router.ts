import express from 'express';

import authRouter from './auth.router';


const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);


mainRouter.get('/pin', (_, res) => {
  res.send('¡Pin recibido! 📌');
})

export default mainRouter;