var mongoose = require('mongoose');
var Schema = mongoose.Schema

var groupSchema = new Schema({
  name: String,
  description: String,
  campus: String,
})

//New function to find by name
groupSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});


var Group = mongoose.model('Group', groupSchema);

module.exports = Group;
