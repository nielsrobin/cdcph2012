var express = require('express');
var _ = require('underscore');
var app = express.createServer();
app.use(express.bodyParser());

var products = [];

app.get('/', function(req, res){
	res.send('try /products');
});

app.get('/products', function(req, res){
	res.json(products);
});

app.get('/products/:id', function(req, res){

	var p = _.find(products, function(product){
		return product.Id == req.params.id;
	});
					 
	res.json(p != undefined ? p : { error: "id not found"} );
});

app.post('/products', function(req, res){
	products.push(req.body);
	
	res.json({status:"ok"});
});

app.put('/products/:id', function(req, res){

	_.each(
		products,
		function(product, i){
			if(product.Id == req.params.id)
			{
				products[i].Name = req.body.Name;
			}
		}
	)

	res.json({status:"ok"});
});

app.delete('/products/:id', function(req, res){
	_.each(
		products,
		function(product, i){
			if(product.Id == req.params.id)
			{
				products.splice(i,1);
			}
		}
	)
	res.json({status:"ok"});
});

app.listen(8888);