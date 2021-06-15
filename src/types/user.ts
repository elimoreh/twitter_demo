import { ObjectID } from "mongodb";

interface User {
  _id: ObjectID;
  createdAt: Date;
  authId: string;
  phone: string;
  email: string;
  followers: ObjectID[];
  following: ObjectID[];
  delete?: boolean;
}

export default User;
