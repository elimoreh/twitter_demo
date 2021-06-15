import { ObjectID } from "mongodb";

export interface Tweet {
  _id: ObjectID;
  createdAt: Date;
  userId: ObjectID;
  text: string;
  deleted?: boolean;
}

export default Tweet;
