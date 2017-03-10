var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
})

userSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});


var User = mongoose.model('User', userSchema);


module.exports = User;
