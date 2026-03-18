import { Request, Response, NextFunction } from "express";

import { supabase } from "clients";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Token requerido" });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error) {
    return res.status(401).json({ error: "Token inválido" });
  }

  req.user = data.user; // normalmente se tipa en Express
  next();
};
