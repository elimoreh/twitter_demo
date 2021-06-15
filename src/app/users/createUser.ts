import auth from "../../auth";
import { Database } from "../../types";
import { insertUser } from "../../store";

const createUser = async (_: any, args: any, db: Database) => {
  const { email, password, phone } = args;
  const { uid: authId } = await auth.createUser({
    email,
    emailVerified: true,
    phoneNumber: phone,
    password,
  });

  const user = await insertUser(db, { email, authId, phone });

  return user;
};

export default createUser;
