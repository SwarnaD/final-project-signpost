var mongoose = require('mongoose');
var Schema = mongoose.Schema

var eventSchema = new Schema({
  groupId: String,
  name: String,
  description: String,
  location: String,
  campus: String,
  // eventHosts: [String], // Groups hosting event
  // repeat: Boolean, // Event occurs monthly, weekly, daily, etc
  tags: [String],
  eventAdmins: [String], // Users administrating events
  date: String
})

//New function to find by name
eventSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});

eventSchema.static('findByGroup', function (groupId, callback) {
  return this.find({ groupId: groupId }, callback);
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
