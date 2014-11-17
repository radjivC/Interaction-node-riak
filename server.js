var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, function (req, res) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write('<body>');
  response.write('<h1>');
  response.write('crypted unicorn');
  response.write('</h1>');
  response.write('</body>');
  response.write('</html>');
  res.end("crypted unicorn\n");
}).listen(8000);
