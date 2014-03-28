//
//
// iteraTechnoSprint node.js server
//
var http = require('http');
var path = require('path');
var url = require("url");

var server = http.createServer(function(request,response) {  
    var parsedUrl = url.parse(request.url, true); // true to get query as object
    var queryAsObject = parsedUrl.query;
    console.log(JSON.stringify(queryAsObject));

   

    getExternalRessource(function(resp) {
        response.write(JSON.stringify(queryAsObject));
        response.end(resp);
    });

  
});


var getExternalRessource = function(callback) {
    var options = {
      host: 'www.iteratec.de',
      port: 80,
      path: '/index.html'
    };
    
    http.get(options, function(resp){
        resp.on('data', callback);
    }).on("error", function(e){
        console.log("Got error: " + e.message);
    });
}


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});


