//
//
// iteraTechnoSprint node.js server
//
var http = require('http');
var path = require('path');
var url = require("url");

var server = http.createServer(function(request,response){  
  var parsedUrl = url.parse(request.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;
  console.log(JSON.stringify(queryAsObject));
  response.end(JSON.stringify(queryAsObject));
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
