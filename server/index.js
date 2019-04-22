import cors from 'cors';
import express from 'express';
import server from './Apollo';
import { GRAPHQL_PATH, SERVER_PORT } from '../utils/constants';

const app = express();

app.use(cors());

server.applyMiddleware({ app, path: GRAPHQL_PATH });

app.listen({ port: SERVER_PORT }, () => {
  console.log(`🚀 running on http://localhost:${SERVER_PORT}${GRAPHQL_PATH}`);
});
