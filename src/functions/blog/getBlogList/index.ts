// import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getBlogListMAIN`,
  events: [
    {
      http: {
        method: 'get',
        path: 'blogApi/getBlogList',
        cors: true,
        // request: {
        //   schema: {
        //     'application/json': schema
        //   }
        // }
      },
    },
  ],
};
