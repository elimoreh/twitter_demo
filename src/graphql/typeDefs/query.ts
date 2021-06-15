import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    # User
    getUser(_id: ID, phone: String, email: String): User!

    # Tweet
    getTwitterFeed(userId: ID): [Tweet!]!
    getUsersTweets(userId: ID): [Tweet!]!
  }
`;

export default query;
