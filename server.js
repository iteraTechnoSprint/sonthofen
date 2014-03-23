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
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(queryAsObject['param1'] + "," + queryAsObject['param2'] );
    });

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
