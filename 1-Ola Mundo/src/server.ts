import express from 'express';
import compression from 'compression';
import schema from './schema';
import { createServer } from 'http';

const { ApolloServer } = require('apollo-server-express');
var cors = require('cors')

const app = express();

app.use('*', cors());

app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
});

server.start();

server.applyMiddleware({ app });

const PORT = 5300;
const httpServer = createServer(app);
httpServer.listen(
    { port: PORT},
    () => console.log(`Olá Mundo, API GraphQl http://localhost:${PORT}/graphql`)
)