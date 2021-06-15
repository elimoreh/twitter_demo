import merge from "lodash.merge";

import userResolvers from "./users";
import tweetResolvers from "./tweets";

const resolvers = merge(userResolvers, tweetResolvers);

export default resolvers;
