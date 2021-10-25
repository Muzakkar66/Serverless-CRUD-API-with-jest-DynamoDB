import { handlerPath } from '@libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.postBlogMAIN`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'blogApi/updateBlog',
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
