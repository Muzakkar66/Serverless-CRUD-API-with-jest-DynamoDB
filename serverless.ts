import type { AWS } from '@serverless/typescript';
import processData from '@functions/processData';
import postBlog from '@functions/blog/postBlog';
import GetBlogList from '@functions/blog/getBlogList';
import updateBlog from '@functions/blog/updateBlog';
import deleteBlog from '@functions/blog/deleteBlog';

const serverlessConfiguration: AWS = {  
  service: 'Blog-serviceTemplate',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },

  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-iam-roles-per-function', 'serverless-prune-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    stage: 'local',
    region: 'eu-west-2',
    environment: {
      DEBUG: '*',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      BLOG_TABLE: 'CRUD-baseTemplate',
      AWS_ACCOUNT_ID: '218767131295',
    },
    tracing: {
      lambda: true,
    },
    iamRoleStatements: [{
      Effect: 'Allow',
      Action: [
        'xray:PutTraceSegments', 'xray:PutTelemetryRecords',
        'dynamodb:PutItem',
        'dynamodb:Scan',
        'dynamodb:UpdateItem',
        'dynamodb:DeleteItem',
      ],
      Resource: '*',
    }],
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    processData, postBlog, GetBlogList, updateBlog, deleteBlog
  },

  resources: {
    Resources: {
      blogTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'CRUD-baseTemplate',
          AttributeDefinitions: [
            { AttributeName: 'auther', AttributeType: 'S' },

          ],
          KeySchema: [
            { AttributeName: 'auther', KeyType: 'HASH' },

          ],
          BillingMode: 'PAY_PER_REQUEST',
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
