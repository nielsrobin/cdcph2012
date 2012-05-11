var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // get, post, put, delete
  var method = req.method;
  
  var url = require('url').parse(req.url);
  
  if(url.pathname != "/favicon.ico")
  {
	  console.log(url.href);
	  console.log(url.search);
	  console.log(url.query);
	  console.log(url.pathname);
	  console.log(req.method);
  }
  
  res.end(url.href);
  	
}).listen(8888, 'localhost');
console.log('Server running at http://localhost:8888/');