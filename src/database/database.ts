import { MongoClient } from "mongodb";
import { Database } from "../types";

import { mongoUrl } from "./constants";

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(process.env.DB_NAME);
  console.log("Database connection successful");

  return {
    users: db.collection("users"),
    tweets: db.collection("tweets"),
  };
};
