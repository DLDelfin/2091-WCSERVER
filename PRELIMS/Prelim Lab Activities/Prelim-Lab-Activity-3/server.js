var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is Home Page.</h1><body><p>Hello! My name is Dayson L. Delfin of WD - 201/p></body></html>'
    );
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is Student Page.</h1><body><p>Hello! My name is Dayson Delfin of WD - 201</p></body></html>'
    );
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is Admin Page.</h1><body><p>Hello! My name is Dayson L. Delfin of WD - 201</p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);
console.log('node.js web server at port 5000 is running...');
