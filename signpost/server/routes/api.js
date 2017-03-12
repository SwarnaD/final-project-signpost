// model declaration goes here
var User = require('../models/user');

var Group = require('../models/group');
var Event = require('../models/event');

var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening!');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: "The API works!"});
});

router.route('/auth')
  .post(function(req, res) {
    let password = req.body.password;
    User.findOne({ 'email': req.body.email }, function(err) {
      if (err) res.send(err);
      if (User.password === req.body.password) {
        res.json({
          status: 200,
          body: { token: "jwttokenplaceholder" }  // TODO: write token generator
        });
      } else {
        res.json({
          status: 200
        });
      }
    });
  });

router.route('/users')
  .post(function(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'User created!' });
    });
  })
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);
      if (req.header('token') === 'jwttokenplaceholder') {  // TODO: write token generator
        res.json(users);
      } else {
        res.json({ status: 401 }); // TODO: send proper error status
      }
    });
  });

router.route('/users/:name')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        User.findByName(req.params.name, function(err, user) {

            if (err)
                res.send(err);
            user.name = req.body.name;  // update the bears info
            user.email = req.body.email;
			user.password = req.body.password;
            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'User updated!' });
            });

        });

  })
  .get(function(req, res) {
    User.findByName(req.params.name, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
    });
  })
  .delete(function(req, res) {
        User.remove({
            name: req.params.name
			// _id: req.params.name

        }, function(err, users) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


//Get all groups
router.route('/groups')
  .post(function(req, res) {
    var group = new Group();
    group.name = req.body.name;
    group.description = req.body.description;
    group.campus = req.body.campus;
    group.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'Group created!' });
    });
  })
  .get(function(req, res) {
    Group.find(function(err, groups) {
      if (err) res.send(err);
      res.json(groups);
    })
  });

router.route('/groups/:name')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        Group.findByName(req.params.name, function(err, group) {

            if (err)
                res.send(err);
            group.name = req.body.name;  // update the bears info
            group.email = req.body.email;
			group.password = req.body.password;
            // save the group
            group.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Group updated!' });
            });

        });

  })
  .get(function(req, res) {
    Group.findByName(req.params.name, function(err, group) {
            if (err)
                res.send(err);
            res.json(group);
    });
  })
  .delete(function(req, res) {
        Group.remove({
            name: req.params.name
			// _id: req.params.name

        }, function(err, groups) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });





router.route('/events')
  .post(function(req, res) {
    var event = new Event();
    event.name = req.body.name;
    event.description = req.body.description;
    event.location = req.body.location;
    event.date = Date(); // For now create date for current time
    event.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'event created!' });
    });
  })
  .get(function(req, res) {
    Event.find(function(err, events) {
      if (err) res.send(err);
      res.json(events);
    })
  });

router.route('/events/:name')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        Event.findByName(req.params.name, function(err, event) {

            if (err)
                res.send(err);
            event.name = req.body.name;  // update the bears info
            event.email = req.body.email;
			event.password = req.body.password;
            // save the event
            event.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Event updated!' });
            });

        });

  })
  .get(function(req, res) {
    Event.findByName(req.params.name, function(err, event) {
            if (err)
                res.send(err);
            res.json(event);
    });
  })
  .delete(function(req, res) {
        Event.remove({
            name: req.params.name
			// _id: req.params.name

        }, function(err, events) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });







// see this link for other useful routes (like getall, delete):
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

module.exports = router;
