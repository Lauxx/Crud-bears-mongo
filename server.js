var express = require('express');//called express
var app = express();//define our app using epress
var bodyParser = require('body-parser');
//^^set dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');
//object relational matter ORM = mongoose reaches into database; want to use animals database
//run mongo(database) in terminal 'sudo mongod' - connects with database

var Bear = require('./models/bear');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());  //mounting middleware

var port = process.env.PORT || 8080; //set a port

var router = express.Router(); //get an instance of router

router.use(function(req, res, next){
	console.log("Something is happening");
	next();//make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res){
	res.json({message: 'Good job Lauren!'});
}); //^^test route to make sure everything is working (accessed at GET http://localhost:8080/api)


//MORE ROUTES FOR OUR API WILL HAPPEN HERE!





router.route('/bears')
	.post(function(req, res){

		var bear = new Bear();

		bear.name = req.body.name;
		bear.age = req.body.age;
		bear.gender = req.body.gender;

		bear.save(function (err, bear){
			if(err){
				console.log(err)//do something
			}else{
				res.json(bear)//do something
			}
		});

	})

	.get(function(req, res){
		Bear.find(function(err, bears){
			if(err){
				console.log(err)
			}else{
				res.json(bears)
			}
		})
		
	});


router.route('/bears/:bear_id')//finding bears by id
	.get(function(req, res){
		Bear.findById(req.params.bear_id, function(err, bear){
			if(err){
				console.log(err)
			}else{
				res.json(bear)
			}
		})
	});




app.use('/api', router); //REGISTER OUR ROUTES: all of our routes will be prefixed with /api

app.listen(port); //START THE SERVER
console.log("Magic happens on port " + port);



