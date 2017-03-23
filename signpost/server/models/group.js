var mongoose = require('mongoose');
var Schema = mongoose.Schema

var groupSchema = new Schema({
  name: String,
  description: String,
  dateCreated: Date, // Date the group was made
  tags: [String],
  admins: [String], // Moderators of the group
  campus: String,
  events: [String],
  followers: [String]
})

//New function to find by name
groupSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});

var Group = mongoose.model('Group', groupSchema);

module.exports = Group;
