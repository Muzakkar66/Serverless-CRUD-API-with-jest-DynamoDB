// /* eslint-disable import/extensions */
import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '../../../libs/apiGateway';
import { middyfy } from '../../../libs/lambda';
import * as AWS from 'aws-sdk';
import schema from './schema';

const dynamodb = new AWS.DynamoDB.DocumentClient();
/**
 * @localmember updatePost
 * @description updating post.
 * @param {ValidatedEventAPIGatewayProxyEvent <typeof schema>} body the name to greet.
 * @return {JSON} retrun the DUMP of {ValidatedEventAPIGatewayProxyEvent <typeof schema>}.
 */
const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
) => {
  const { body } = event;
  let data: unknown = {};
  try {
    const updateBlog = {
      TableName: 'CRUD-baseTemplate',
      Key: {
        auther: body.auther,
      },
      UpdateExpression: 'set category=:t, body=:b',
      ExpressionAttributeValues: {
        ':t': body.category,
        ':b': body.body,
      },
    };

    data = await dynamodb.update(updateBlog).promise();
  } catch (error) {
    return formatJSONResponse({
      message: 'Error',
      error,
    });
  }
  return formatJSONResponse({
    received: true,
    message: 'Blog updatd Successfully',
    data,
    body,
  });
};

export const postBlogMAIN = middyfy(handler);
