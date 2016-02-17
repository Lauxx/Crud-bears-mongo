var express = require('express');//called express
var app = express();//define our app using epress
var bodyParser = require('body-parser');
//^^set dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');
//object relational matter ORM = mongoose reaches into database; want to use animals database
//run mongo(database) in terminal 'sudo mongod' - connects with database

var bearRouter= require('./routes/bears');

var Bear = require('./models/bear');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());  //mounting middleware

var port = process.env.PORT || 8000; //set a port

var router = express.Router(); //get an instance of router

router.use(function(req, res, next){
	console.log("Something is happening");
	next();//make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res){
	res.json({message: 'Good job Lauren!'});
}); //^^test route to make sure everything is working (accessed at GET http://localhost:8080/api)


app.set('view engine', 'ejs');//just trying to view in browser - configuation view engine
app.get('/', function(req, res){
	res.render('index')//index.ejs file - should show in browser at localhost:8000
});

app.get('/about', function(req, res){
	var data ={};
	data.title ="About Page";
	data.name = "Lauren";
	data.time = new Date();
	res.render('about', data)
});

app.use('/api', bearRouter); //REGISTER OUR ROUTES: all of our routes will be prefixed with /api

app.listen(port); //START THE SERVER
console.log("Magic happens on port " + port);



