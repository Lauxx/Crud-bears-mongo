var express = require('express');
var router = express.Router();//getting an instance of router

var Bear = require('../models/bear');//requiring our schema again



router.route('/bears')//this is were we want to POST and GET
	.post(function(req, res){

		var bear = new Bear();//constructing a new bear with schema

		bear.name = req.body.name;
		bear.age = req.body.age;
		bear.gender = req.body.gender;

		bear.save(function (err, bear){
			if(err){
				console.log(err)//do something
			}else{
				res.json(bear)
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


router.route('/bears/:bear_id')//finding bears by id; colon says its a param
	.get(function(req, res){
		Bear.findById(req.params.bear_id, function(err, bear){
			if(err){
				console.log(err)
			}else{
				res.json(bear)
			}
		})
	})
	.put(function(req, res){
		Bear.findById(req.params.bear_id, function(err, bear){
			if(err){
				console.log(err)
			}else{
				bear.name = req.body.name ? req.body.name : bear.name; //ternary statement
				bear.age = req.body.age ? req.body.age : bear.age;
				bear.gender = req.body.gender ? req.body.gender : bear.gender;

				bear.save(function(err){
					if(err){
						console.log(err)
					}else{
						res.json({title: 'bear updated'})
					}
				})
			}
		})
	})

	.delete(function(req, res){
		Bear.remove({_id: req.params.bear_id}, function(err, bear){
			if(err){
				console.log(err)
			}else{
				res.json({title: 'bear deleted'})
			}
		})
	})


module.exports = router;
