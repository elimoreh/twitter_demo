import { gql } from "apollo-server-express";

const tweet = gql`
  type Tweet {
    _id: ID!
    createdAt: String
    text: String
    userId: ID
    deleted: Boolean
  }
`;

export default tweet;
