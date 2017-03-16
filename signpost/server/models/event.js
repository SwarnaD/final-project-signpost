var mongoose = require('mongoose');
var Schema = mongoose.Schema

var eventSchema = new Schema({
  name: String,
  description: String,
  location: String,
  groupId: String,
  eventAdmins: [String], // Users administrating events
  eventHosts: [String], // Groups hosting event
  repeat: Boolean, // Event occurs monthly, weekly, daily, etc
  tags: [String],
  date: Date
})

//New function to find by name
eventSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
