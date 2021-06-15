import { gql } from "apollo-server-express";

const user = gql`
  type User {
    _id: ID!
    createdAt: String
    authId: String
    phone: String
    email: String
    following: [ID]
    followers: [ID]
  }
`;

export default user;
