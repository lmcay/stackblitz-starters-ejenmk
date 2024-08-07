var http = require('http');
var myName = require('./object-name.js'); //Route 1 only names
var pageType = require('./function-name.js'); //Route 2 page types
var routes = require('./routes.js'); //Route 3, page routes

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      // '<html><body><p>This is ' +
      //   myName.firstName +
      //   ' ' +
      //   myName.lastName +
      //   ' Home page. Route 1.</p></body></html>'

      // '<html><body><p>This is ' +
      //   myName.firstName +
      //   ' ' +
      //   myName.lastName +
      //   ' ' +
      //   pageType.homePage() +
      //   ' page. Route 2.</p></body></html>'

      routes.home('Luis Miguel Cayanan') //Route 3, page routes
    );
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      '<html><body><p>This is ' +
        myName.firstName +
        ' ' +
        myName.lastName +
        ' ' +
        pageType.studentPage() + //Route 2, multiple functions
        ' page.</p></body></html>'
    );
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      routes.admin('Luis Miguel Cayanan') //Route 3, page type
    );
    res.end();
  } else {
    res.end('Invalid Request!');
  }
});

server.listen(4000);
console.log('Node.js web server at port 5000 is running..');

//Luis Miguel Cayanan.
// July 17, 2024
//WD-301
