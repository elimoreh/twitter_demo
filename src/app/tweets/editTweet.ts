import { Database } from "../../types";
import { updateTweet } from "../../store";

export const editTweet = async (_: any, args: any, db: Database) => {
  const { _id, text } = args;
  const tweet = updateTweet(db, _id, { text });

  return tweet;
};
