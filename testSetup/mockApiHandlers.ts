import { rest } from 'msw';

const getAllPosts = rest.get(
  'http://jsonplaceholder.typicode.com/posts',
  (req, res, ctx) => {
    return res(
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Mocked response JSON body',
      })
    );
  }
);
const getSinglePost = rest.get(
  'http://jsonplaceholder.typicode.com/posts/10',
  (req, res, ctx) => {
    return res(
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Mocked response JSON body',
      })
    );
  }
);

export default [getAllPosts, getSinglePost];
