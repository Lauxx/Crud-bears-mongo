//creating a schema (just for mongoose) - a blueprint
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: String,
	age: Number, 
	gender: String, 
});



module.exports = mongoose.model('Bear', BearSchema);