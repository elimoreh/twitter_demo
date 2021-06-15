import { Collection } from "mongodb";

import User from "./user";
import Tweet from "./tweet";

interface Database {
  users: Collection<User>;
  tweets: Collection<Tweet>;
}

export default Database;
