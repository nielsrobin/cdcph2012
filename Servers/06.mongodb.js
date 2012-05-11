var express = require('express');
var _ = require('underscore');
var app = express.createServer();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/WatDB');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var productSchema = new Schema({
    id: ObjectId
  , sku: String
  , name: String
  , price: Number
});

var productModel = mongoose.model('Product', productSchema);

app.get('/', function(req, res){
	res.send('try /products');
});

app.get('/products', function(req, res){
    productModel.find({}).exec(function (err, products) {
        res.json(products);
    });
});

app.get('/products/:sku', function(req, res){
    var query = productModel.find({});
    query.where('sku', req.params.sku);
    query.exec(function (err, product) {
        res.json(product);
    });
});

app.post('/products', function(req, res){
	var product = new productModel({
        sku: req.body.Sku,
        name: req.body.Name,
        price: req.body.Price
    });
    product.save(function (err) {
	    res.json({status: "created", sku: product.sku});
    });
});

app.put('/products/:sku', function(req, res){
    productModel.findOne({ sku: req.params.sku }, function (err, product){
        product.name = req.body.Name;
        product.price = req.body.Price;
        product.save(function (err) {
	        res.json({status: "updated", sku: product.sku });
        });

    });
});

app.delete('/products/:sku', function(req, res){
    productModel.where('sku', req.params.sku).remove(function (err, product){
        res.json({status: "deleted",sku: product.sku});
    });
});

app.listen(8888);