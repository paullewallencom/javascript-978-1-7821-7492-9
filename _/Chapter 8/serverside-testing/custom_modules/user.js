var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserDetail = new Schema({
    username: String,
	name: String,
	password: String,
    email: String
    }, {
      collection: 'users'
    });
var UserDetails = mongoose.model('users', UserDetail);

module.exports = UserDetails;