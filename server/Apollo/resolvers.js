const posts = {
  1: {
    id: 1,
    title: 'Test Post Title 1',
  },
  2: {
    id: 2,
    title: 'Test Post Title 2',
  },
};

export default {
  Query: {
    posts: () => Object.values(posts),
    post: (parent, { id }) => posts[id],
  },
};
