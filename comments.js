// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// Create server
http.createServer(function (request, response) {
    // Get path name
    var pathname = url.parse(request.url).pathname;
    // Print pathname
    console.log("Request for " + pathname + " received.");
    // Read file from path
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            // Print error
            console.log(err);
            // HTTP status code: 404: NOT FOUND
            // Content type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // Page found
            // HTTP status code: 200: OK
            // Content type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});
            // Write content of file to response body
            response.write(data.toString());
        }
        // Send response body
        response.end();
    });
}).listen(8081);

// Print message
console.log('Server running at http://