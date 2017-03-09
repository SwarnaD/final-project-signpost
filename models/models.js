var mongoose = require('mongoose');

var userSchema = new mongoose.userSchema({
	username: {type: String, required: true},
	password: String,
	salt: String // Can use this later if we're feeling it
 	emai: String
	//We need to add more to the user soon
});

mongoose.model('User', userSchema);

var User = mongoose.model('User');
exports.findByUser = function(user, call){

	User.findOne({username: user}, function(err, user){
		if (err){
			return call(err);
		}
		return call(null, user);
	});
}