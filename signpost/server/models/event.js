var mongoose = require('mongoose');
var Schema = mongoose.Schema

var eventSchema = new Schema({
  name: String,
  description: String,
  location: String,
  date: Date,
})

//New function to find by name
eventSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});


var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
