import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";

import { schema } from "../../graphql/schema";

import { resolvers } from "../../graphql/resolvers";
import { createContext } from "../../graphql/context";
import Cors from "micro-cors";
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors();

const server = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
});

const startServer = server.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
  return;
});
