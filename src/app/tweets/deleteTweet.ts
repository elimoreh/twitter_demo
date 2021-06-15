import { Database } from "../../types";
import { updateTweet } from "../../store";

export const deleteTweet = async (_: any, args: any, db: Database) => {
  const { _id } = args;
  const tweet = updateTweet(db, _id, { deleted: true });

  return tweet;
};
