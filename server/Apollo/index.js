import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
