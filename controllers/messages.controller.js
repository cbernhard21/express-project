function getMessages(req, res) {
  res.send('<h1>hello Colin</h1>');
}

function postMessage(req, res) {
  console.log('updating messages....');
}

module.exports = {
  getMessages,
  postMessage,
};
