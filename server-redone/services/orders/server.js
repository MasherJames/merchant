import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { buildFederatedSchema } from "@apollo/federation";
import typeDefs from "./schema";
import resolvers from "./resolvers";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 5000;
httpServer.listen({ port }, () => {
  console.log(`Apollo server for auth service running on port ${port}`);
});
