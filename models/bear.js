//creating a schema (just for mongoose) - a blueprint
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: String,
	age: Number, 
	gender: String, 
});

module.exports = mongoose.model('Bear', BearSchema);
//this is all necessary to create new bears in our database
//Schema method on mongoose; new = constructor function
//create a model/blueprint
//every schema gets it's own file
