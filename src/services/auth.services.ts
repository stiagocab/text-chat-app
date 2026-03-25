import { supabase } from "clients";

import auth from "clients/firebase.client";

export const signinService = async (email: string, password: string) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message ?? "Sign in failed");
  }

  return {
    id: data.localId,
    email: data.email,
    accessToken: data.idToken,
    refreshToken: data.refreshToken,
  };
};

export const singupService = async (email: string, password: string) => {
  return auth.createUser({
    email, password
  }).then(resp => {
    return {
      id: resp.uid,
      email: resp.email,
    };
  }).catch((error: Error) => {
    throw new Error(error.message);
  });
};

export const refreshTokenService = async (refreshToken: string) => {
  return auth.


  /* if (!refreshToken) {
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
  }; */
};

export const signoutService = async (accessToken: string) => {
  if (!accessToken) {
    throw new Error("Session active required");
  }

  return true;
};
