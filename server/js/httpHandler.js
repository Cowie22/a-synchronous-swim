const headers = require('./cors');
const messages = require('./messageQueue');

module.exports = (req, res) => {
  res.writeHead(200, headers);
  res.end(messages.dequeue());
};
