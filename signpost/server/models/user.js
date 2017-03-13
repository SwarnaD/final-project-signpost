var mongoose = require('mongoose');
var Schema = mongoose.Schema
var crypto = require('crypto');

var userSchema = new Schema({
  name: String, // we should update this to have first/last fields
  email: String,
  password: String,
  salt: String
})

userSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});

userSchema.methods.generateSalt = function(length) {
  return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')
    .slice(0, length);
}

userSchema.methods.sha512 = function(password) {
  var hash = crypto.createHmac('sha512', this.salt).update(password).digest('hex');
  return hash;
}

userSchema.methods.checkPassword = function(password) {
  if (this.password === this.sha512(password)) {
    return true;
  }
}

var User = mongoose.model('User', userSchema);

module.exports = User;
