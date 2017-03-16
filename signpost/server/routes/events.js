var Event = require('../models/event');
var express = require('express');
var router = express.Router();

router.route('/events')
  .post(function(req, res) {
    var event = new Event();
    event.name = req.body.name;
    event.description = req.body.description;
    event.location = req.body.location;
    event.date = Date(); // For now create date for current time
    event.save(function(err) {
      if (err) {
        // res.send(err);
        res.json({ error: 'Couldnt save event' });
      }
      res.json({ message: 'event created!' });
    });
  })
  .get(function(req, res) {
    Event.find(function(err, events) {
      if (err) {
        // res.send(err);
        res.json({ error: 'Couldnt find events' });
      }
      res.json(events);
    })
  });

router.route('/events/:name')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        Event.findByName(req.params.name, function(err, event) {

            if (err){
                // res.send(err);
                res.json({ error: 'Couldnt find event by name' });
            }
            event.name = req.body.name;  // update the bears info
            event.email = req.body.email;
      event.password = req.body.password;
            // save the event
            event.save(function(err) {
                if (err){
                  res.json({ error: 'Couldnt save event' });
                  // res.send(err);
                }
                    
                res.json({ message: 'Event updated!' });
            });

        });

  })
  .get(function(req, res) {
    Event.findByName(req.params.name, function(err, event) {
            if (err){
              // res.send(err);
              res.json({ error: 'Couldnt find event by name' });
            }
            res.json(event);
    });
  })
  .delete(function(req, res) {
        Event.remove({
            name: req.params.name
      // _id: req.params.name

        }, function(err, events) {
            if (err){
              res.json({ error: 'Couldnt delete event' });
              res.send(err);
            }
                

            res.json({ message: 'Successfully deleted' });
        });
    });


module.exports = router;
