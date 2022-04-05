const path = require('path');

function getMessages(req, res) {
  // res.send('<h1>hello Colin</h1>');

  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'amy.jpg'));
}

function postMessage(req, res) {
  console.log('updating messages....');
}

module.exports = {
  getMessages,
  postMessage,
};
