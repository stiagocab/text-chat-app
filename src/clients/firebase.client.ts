import admin from "firebase-admin"

const serviceAccount = require("../../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const auth = admin.auth();

export default auth;