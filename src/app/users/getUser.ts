import { Database } from "../../types";
import { findUser } from "../../store";

const getUser = async (_: any, args: any, db: Database) => {
  const filter = args;
  const user = await findUser(db, filter);

  return user;
};

export default getUser;
