import * as admin from "firebase-admin";

const serviceAccount = require("../../auth.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

export default auth;
