import axios from 'axios';

const API_URL = 'http://localhost:8000/graphql';

export const posts = async () =>
  axios.post(API_URL, {
    query: `
      query {
        posts {
          id
          title
        }
      }
    `,
  });

export const post = async variables =>
  axios.post(API_URL, {
    query: `
      query($id: String!) {
        post(id: $id) {
          id
          title
        }
      }
    `,
    variables,
  });
