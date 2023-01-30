var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1> Welcome to my Node.js Application</h1><body><p> Welcome Dayson L. Delfin. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is the About Page.</h1><body><p>Hello Dayson Delfin. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is contact Page.</h1><body><p>Dayson L. Delfin, if you want additional details about this activity go to this site://www.tutorials.com</p></body></html>'
    );
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><h1>This is the Galley page.</h1><body><p>Hello! My name is Dayson L. Delfin of WD - 201</p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);
console.log('node.js web server at port 5000 is running...');
