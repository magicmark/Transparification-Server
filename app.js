'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser());

var bindRoutes = require('./routes')(app);

var port = process.env.PORT || 3451;

function startServer() {
  app.listen(port, function() {
    console.log("Listening on port ", port);
  });
}

startServer();
