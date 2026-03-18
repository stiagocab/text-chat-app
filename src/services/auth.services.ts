import { supabase } from "clients";
import { singupWithEmailAndPassword } from "../controllers/auth.controller";

export const signinService = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return {
    id: data.user?.id,
    email: data.user?.email,
    accessToken: data.session?.access_token,
    refreshToken: data.session?.refresh_token,
  };
};

export const singupService = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return {
    id: data.user?.id,
    email: data.user?.email,
    accessToken: data.session?.access_token,
    refreshToken: data.session?.refresh_token,
  };
};

export const refreshTokenService = async (refreshToken: string) => {
  if (!refreshToken) {
    throw new Error("Refresh token required");
  }

  const { data, error } = await supabase.auth.refreshSession({
    refresh_token: refreshToken,
  });

  if (error || !data.session) {
    throw new Error("Invalid refresh token");
  }

  return {
    user: {
      id: data.user?.id,
      email: data.user?.email,
    },
    accessToken: data.session.access_token,
    refreshToken: data.session.refresh_token,
  };
};

export const signoutService = async (accessToken: string) => {
 
  if (!accessToken) {
    throw new Error("Session active required");
  }

  return true
}