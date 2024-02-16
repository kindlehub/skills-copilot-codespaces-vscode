// create web server
// create a web server that listens on port 3000
// when a request is received, respond with a status code of 200 and a body of 'Hello, World!'

var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!');
});
server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');
