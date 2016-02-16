var express = require('express');//called express
var app = express();//define our app using epress
var bodyParser = require('body-parser');
//^^set dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//^^mounting middleware
var port = process.env.PORT || 8080;
//^^set a port
var router = express.Router();

router.get('/', function(req, res){
	res.json({message: 'Good job Lauren!'});
});
//^^test route to make sure everything is working (accessed at GET http://localhost:8080/api)


//MORE ROUTES FOR OUR API WILL HAPPEN HERE!

app.use('/api', router);
//^^REGISTER OUR ROUTES: all of our routes will be prefixed with /api

app.listen(port);
//^^START THE SERVER
console.log("Magic happens on port " + port);