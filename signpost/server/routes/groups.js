var Group = require('../models/group');
var express = require('express');
var router = express.Router();

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

module.exports = router;
