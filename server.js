var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('clientSide'));

server.listen(8080, function() {
  console.log('Chat server running');
});