import "express";

import { User } from "@supabase/supabase-js";

declare module "express" {
  interface Request {
    user?: User;
  }

  interface Response {
    data?: unknown;
  }
}
