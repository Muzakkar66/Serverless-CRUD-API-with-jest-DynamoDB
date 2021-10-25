export default {
  type: 'object',
  properties: {
    auther: { type: 'string' },
    category: { type: 'string' },
    body: { type: 'string' },

  },
  required: ['auther', 'category', 'body'],
} as const;
