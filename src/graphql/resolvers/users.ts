import { IResolvers } from "apollo-server-express";

import { getUser, createUser, addFollowing } from "../../app/users";

const userResolvers: IResolvers = {
  Query: { getUser },
  Mutation: { addFollowing, createUser },
};

export default userResolvers;
