import { gql } from "apollo-server-express";

const mutation = gql`
  type Mutation {
    # User
    createUser(email: String!, phone: String!, password: String!): User!
    addFollowing(userId: ID!, followingId: ID!): User!

    # Tweet
    createTweet(userId: ID!, text: String): Tweet!
    editTweet(_id: ID!, text: String): Tweet!
    deleteTweet(_id: ID!): Tweet!
  }
`;

export default mutation;
