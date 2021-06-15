import { ApolloServer } from "apollo-server-express";

import { Database } from "../types";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const createServer = (db: Database): ApolloServer => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: db,
    introspection: true,
    playground: true,
  });

  return server;
};
