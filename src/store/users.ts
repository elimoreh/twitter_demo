import { ObjectID } from "mongodb";

import { Database } from "../types";
import { User } from "../types";

export const insertUser = async (
  db: Database,
  userInfo: Pick<User, "email" | "authId" | "phone">
) => {
  const user = { ...userInfo, createdAt: new Date(), following: [], followers: [] };
  await db.users.insertOne(user);

  return user;
};

export const findUser = async (db: Database, filter: any) => {
  if (filter._id) filter._id = new ObjectID(filter._id);
  const exists = { deleted: { $exists: false } };

  const user = await db.users.findOne({ ...filter, ...exists });

  return user;
};

export const insertFollowing = async (db: Database, userId: string, followingId: string) => {
  const pushToFollowing = { $addToSet: { following: new ObjectID(followingId) } };
  const { value: user } = await db.users.findOneAndUpdate(
    { _id: new ObjectID(userId) },
    pushToFollowing,
    { returnOriginal: false }
  );

  const pushToFollower = { $addToSet: { followers: new ObjectID(userId) } };
  await db.users.updateOne({ _id: new ObjectID(followingId) }, pushToFollower);

  return user;
};
