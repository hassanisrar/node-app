import 'source-map-support/register';

export const test: any = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Launchers Go.....!',
      name: 'Hassan',
      input: event,
    }, null, 2),
  };
}