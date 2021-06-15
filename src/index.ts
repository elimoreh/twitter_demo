import "dotenv/config";
import express, { Application } from "express";

import { connectDatabase } from "./database";
import { createServer } from "./graphql";

const run = async (app: Application) => {
  const db = await connectDatabase();

  const server = createServer(db);
  server.applyMiddleware({ app, path: "/" });

  const port = process.env.PORT || 4000;
  app.listen(port);

  console.log(`[app]: 192.168.1.183:${port}`);
};

run(express());
