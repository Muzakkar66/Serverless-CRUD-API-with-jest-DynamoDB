import { handlerPath } from '@libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.deleteBlogMAIN`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'blogApi/deleteBlog',
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
