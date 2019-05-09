import * as postApi from '../fixtures/api';

describe('posts', () => {
  describe('posts(): [Post]', () => {
    it('should return a list of posts if there are any available', async () => {
      const expected = {
        data: {
          posts: [
            {
              id: 1,
              title: 'Test Post Title 1',
            },
            {
              id: 2,
              title: 'Test Post Title 2',
            },
          ],
        },
      };

      const results = await postApi.posts();

      expect(results.data).toEqual(expected);
    });

    it('should return a single post by its ID', async () => {
      const expected = {
        data: {
          post: {
            id: 1,
            title: 'Test Post Title 1',
          },
        },
      };

      const results = await postApi.post({ id: 1 });

      expect(results.data).toEqual(expected);
    });
  });
});
