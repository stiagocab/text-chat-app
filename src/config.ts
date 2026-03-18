import dotenv from "dotenv";

dotenv.config();

export const auth0Secret = process.env.AUTH0_SECRET;
export const auth0BaseURL = process.env.AUTH0_BASE_URL || "http://localhost:3001/";
export const auth0ClientID = process.env.AUTH0_CLIENT_ID;
export const auth0IssuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;
