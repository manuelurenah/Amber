import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  typeDefs,
});

export default server;
