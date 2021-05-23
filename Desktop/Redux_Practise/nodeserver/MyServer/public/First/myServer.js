var http = require("http");

var server = http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('<b>Welocome to first server of Rushikesh</b>');
    response.end();

});

server.listen(8090, function () {

    console.log("server running on 8090");

})