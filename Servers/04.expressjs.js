var app = require('express').createServer();

var formats = {
	json: "json",
	xml: "xml"
}

app.get('/', function(req, res){
	res.send('try /products');
});

app.get('/products', function(req, res){
	// if you don't care you get json!
	var data;
	var format = req.query.format != undefined ? req.query.format : "json";

	console.log(req.query.format);

	if(format == formats.json) {
		res.setHeader("Content-Type", "application/json");
		data = ["fish", "cat", "dog"];
	}
	else if(format == formats.xml) {
		res.setHeader("Content-Type", "application/xml");
		data = "<products><product>fish</product><product>cat</product><product>dog</product></products>";
	}
	else {
		// give them html?
	}
	
	res.send(data);
});

app.listen(8888);