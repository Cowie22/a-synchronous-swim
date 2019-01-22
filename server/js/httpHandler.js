const headers = require('./cors');
const queue = require('./messageQueue');

var requestHandler = function(request, response) {

  headers['Content-Type'] = 'text/plain';
  var statusCode;

  if (request.method === 'GET') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(messages));
  }
  if (request.method === 'POST') {
    statusCode = 201;
    var body = [];
    requestuest.on('data', (chunks) => {
      body.push(chunks);
    }).on('end', () => {
      var input = JSON.parse(Buffer.concat(body).toString());
      messages.push(input);
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(input));
    })
  }
  if (request.method === 'OPTIONS') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response.end();
  } else {
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end('PAGE NOT FOUND');
  }
}
module.exports = {
  requestHandler
};
