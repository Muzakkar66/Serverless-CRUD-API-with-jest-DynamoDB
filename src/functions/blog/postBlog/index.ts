import { handlerPath } from '@libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.PostBlogMAIN`,
  events: [
    {
      http: {
        method: 'post',
        path: 'blogApi/postBlog',
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
