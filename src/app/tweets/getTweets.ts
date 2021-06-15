import { Database, Tweet } from "../../types";
import { findTweets, findUser } from "../../store";

export const getUsersTweets = async (_: any, args: any, db: Database) => {
  return findTweets(db, args);
};

export const getTwitterFeed = async (_: any, args: any, db: Database) => {
  const feed: Tweet[] = [];

  const { userId: _id } = args;
  const user = await findUser(db, { _id });
  if (!user || !user.following) return feed;

  const { following } = user;
  for (const userId of following) {
    const tweets = await findTweets(db, { userId });
    feed.push(...tweets);
  }

  return feed;
};
