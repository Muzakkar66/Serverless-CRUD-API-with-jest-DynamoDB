import { Context } from 'aws-lambda';
import { PostBlogMAIN } from '../src/functions/blog/postblog/handler';
import { getBlogListMAIN } from '../src/functions/blog/getBlogList/handler';
import { deleteBlogMAIN } from '../src/functions/blog/deleteBlog/handler';
/**
 * @localmember blogTest
 * @description Posting blog tests.
 * @param {ValidatedEventAPIGatewayProxyEvent <typeof schema>} body the name to greet.
 * @return {JSON} retrun the DUMP of {ValidatedEventAPIGatewayProxyEvent <typeof schema>}.
 */
describe('who tests the tests?', () => {
  it('can run a test', () => {
    expect.hasAssertions();
    expect(1).toBe(1);
  });
  // Post blog  endpoint test
  it('post blog endpoint', async () => {
    expect.hasAssertions();
    const context: Context = {} as any;
    const body = {
      auther: 'Pasha ',
      category: 'Scan My name is Muzakkar ',
      body: 'Muzakkar ',
    };
    const request = {
      body: JSON.stringify(body),
    };
    await PostBlogMAIN(request, context, (error, data) => {
      if (error) {
      }
      // console.log(data)
      const resposne = JSON.parse(JSON.stringify(data));
      expect(resposne.statusCode).toBe(200);
    });
  });

  // Scan blog list endpoint test
  it('scan blog list endpoint', async () => {
    expect.hasAssertions();
    const context: Context = {} as any;
    const body = {
      auther: 'Pasha ',
      category: 'Scan My name is Muzakkar ',
      body: 'Muzakkar ',
    };
    const request = {
      body: JSON.stringify(body),
    };
    await getBlogListMAIN(request, context, (error, data) => {
      if (error) {
      }
      // console.log(data)
      const resposne = JSON.parse(JSON.stringify(data));
      expect(resposne.statusCode).toBe(200);
    });
  });

  // Delete post endpoint test
  test('Delete blog endpoint', async () => {
    let context: Context = {} as any;
    const body = {
      auther: 'JS',
    };
    const request = {
      body: JSON.stringify(body),
    };
    await deleteBlogMAIN(request, context, function (error, data) {
      if (error) {
      }
      // console.log(data)
      const resposne = JSON.parse(JSON.stringify(data));
      expect(resposne.statusCode).toBe(200);
    });
  });
});
