import { Database } from "../../types";
import { insertFollowing } from "../../store";

const addFollowing = async (_: any, args: any, db: Database) => {
  const { userId, followingId } = args;
  const user = await insertFollowing(db, userId, followingId);

  return user;
};

export default addFollowing;
