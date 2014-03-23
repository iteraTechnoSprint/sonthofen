//
//
// iteraTechnoSprint node.js server
//
var http = require('http');
var path = require('path');

var server = http.createServer(function(request,response){  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("Hello World");  
    response.end();  
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
