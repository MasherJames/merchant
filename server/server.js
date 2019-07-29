import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

dotenv.config();

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'));

const server = new ApolloServer({
    typeDefs: schema
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 5000;
httpServer.listen({ port }, () => {
    console.log(`Apollo server running on port ${port}`);
})