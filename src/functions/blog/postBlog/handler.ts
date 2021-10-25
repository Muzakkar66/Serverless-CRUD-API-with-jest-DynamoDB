import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '../../../libs/apiGateway';
import { middyfy } from '../../../libs/lambda';
import * as AWS from 'aws-sdk';
import schema from './schema';

const dynamodb = new AWS.DynamoDB.DocumentClient();
/**
 * @localmember BlogData
 * @description Posting blog .
 * @param {ValidatedEventAPIGatewayProxyEvent <typeof schema>} body the name to greet.
 * @return {JSON} retrun the DUMP of {ValidatedEventAPIGatewayProxyEvent <typeof schema>}.
 */
const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
) => {
  const { body } = event;
  let data: unknown = {};
  try { 
    const postBlog = {
      TableName: 'CRUD-baseTemplate',
      Item: {
        auther: body.auther,
        category: body.category,
        body: body.body,
      },
    };
    data = await dynamodb.put(postBlog).promise();
  } catch (error) {
    return formatJSONResponse({
      message: 'Error',
      error,
    });
  }
  return formatJSONResponse({
    received: true,
    message: 'Blog Created Successfully',
    data,
  });
};

export const PostBlogMAIN = middyfy(handler);
