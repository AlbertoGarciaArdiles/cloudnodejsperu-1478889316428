/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------
//AG Starts New Relic
require("./newrelic").initialize();
// This application uses express as its web server
// for more info, see: http://expressjs.com

var agent = require('bluemix-autoscaling-agent');
/*
var http = require('http');
var server = http.createServer(function handler(req, res) {
 console.log("Hello!");

 }).listen(process.env.PORT || 3000);
console.log('App is listening on port 3000');
*/

var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
