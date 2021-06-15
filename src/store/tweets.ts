import { ObjectID } from "mongodb";

import { Database, Tweet } from "../types";

export const insertTweet = async (db: Database, userInfo: Pick<Tweet, "userId" | "text">) => {
  const { userId: idString, text } = userInfo;
  const userId = new ObjectID(idString);
  const tweet = { text, userId, createdAt: new Date() };

  await db.tweets.insertOne(tweet);

  return tweet;
};

export const findTweets = async (db: Database, filter: any) => {
  if (filter.userId) filter.userId = new ObjectID(filter.userId);
  const exists = { deleted: { $exists: false } };

  const tweets = await db.tweets.find({ ...filter, ...exists }).toArray();

  return tweets;
};

export const updateTweet = async (db: Database, id: string, edit: Partial<Tweet>) => {
  const updateQuery = { $set: edit };
  const updateOptions = { returnOriginal: false };

  const { value: tweet } = await db.tweets.findOneAndUpdate(
    { _id: new ObjectID(id) },
    updateQuery,
    updateOptions
  );

  return tweet;
};
