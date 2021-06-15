import { IResolvers } from "apollo-server-express";

import {
  getUsersTweets,
  createTweet,
  getTwitterFeed,
  editTweet,
  deleteTweet,
} from "../../app/tweets";

const tweetResolvers: IResolvers = {
  Query: { getUsersTweets, getTwitterFeed },
  Mutation: { createTweet, editTweet, deleteTweet },
};

export default tweetResolvers;
