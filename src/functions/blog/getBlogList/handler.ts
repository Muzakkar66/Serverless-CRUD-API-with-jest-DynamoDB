// /* eslint-disable import/extensions */
import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '../../../libs/apiGateway';
import { middyfy } from '../../../libs/lambda';
import * as AWS from 'aws-sdk';
import schema from './schema';

const dynamodb = new AWS.DynamoDB.DocumentClient();
/**
 * @localmember Get Blog List
 * @description Getting List of blogs.
 * @param {ValidatedEventAPIGatewayProxyEvent <typeof schema>} body the name to greet.
 * @return {JSON} retrun the DUMP of {ValidatedEventAPIGatewayProxyEvent <typeof schema>}.
 */
const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
) => {
  const { body } = event;
  let data: unknown = {};
  try {
    const GetBlogList = {
      TableName: 'CRUD-baseTemplate',
    };
    data = await dynamodb.scan(GetBlogList).promise();
  } catch (error) {
    return formatJSONResponse({
      message: 'Error',
      error,
    });
  }
  return formatJSONResponse({
    received: true,
    message: 'Blogs scaned Successfully',
    data,
    body,
  });
};
export const getBlogListMAIN = middyfy(handler);
