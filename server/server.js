import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';
import models from './database/models';
import getUser from './utils/middleware/authentication';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: async ({ req }) => {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            const token = req.headers.authorization.split(' ')[1];
            try {
                const user = await getUser(token);
                return { user };
            } catch (error) {
                throw new AuthenticationError('Invalid Token');
            }
        } 
    }
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 5000;
httpServer.listen({ port }, () => {
    console.log(`Apollo server running on port ${port}`);
})