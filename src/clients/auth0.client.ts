import { auth0Secret, auth0BaseURL, auth0ClientID, auth0IssuerBaseURL } from "config";

const auth0Config = {
  authRequired: false,
  auth0Logout: true,
  secret: auth0Secret || "a long, randomly-generated string stored in env",
  baseURL: auth0BaseURL,
  clientID: auth0ClientID,
  issuerBaseURL: auth0BaseURL
};

export default auth0Config;
