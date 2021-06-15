import { Database } from "../../types";
import { insertTweet } from "../../store";

export const createTweet = async (_: any, args: any, db: Database) => {
  const { userId, text } = args;
  const user = insertTweet(db, { userId, text });

  return user;
};
