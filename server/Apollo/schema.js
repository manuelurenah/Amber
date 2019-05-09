import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    posts: [Post!]
    post(id: ID!): Post
  }

  type Post {
    id: ID!
    title: String!
  }
`;
