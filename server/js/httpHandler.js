const headers = require('./cors');

var data = {
  results: []
};

var requestHandler = function(request, response) {
  //var header = headers;
  headers['Content-Type'] = 'text/plain';
  var statusCode;

  if (request.method === 'GET') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(data));
  }
  if (request.method === 'POST') {
    statusCode = 201;
    var body = [];
    requestuest.on('data', (chunks) => {
      body.push(chunks);
    }).on('end', () => {
      var input = JSON.parse(Buffer.concat(body).toString());
      data.results.push(input);
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(input));
    })
  }
  if (request.method === 'OPTIONS') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    response.end();
  }
}
module.exports = (request, response) => {
  res.writeHead(200, headers);
  res.end();
};
