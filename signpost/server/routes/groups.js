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
    group.admins.push(req.body.userid);
    group.save(function(err) {
      if (err) {
        // res.send(err);
        res.json({ error: 'Could not create group' });
      }
      res.json({ message: 'Group created!' });
    });
  })
  .get(function(req, res) {
    Group.find(function(err, groups) {
      if (err) {
        // res.send(err);
        res.json({ error: 'Could not find groups' });
      }
      res.json(groups);
    })
  });

router.route('/groups/:id')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        Group.findById(req.params.id, function(err, group) {

            if (err){
                // res.send(err);
                res.json({ error: 'Could not find group by id' });
            }
            group.name = req.body.name;  // update the bears info
            group.email = req.body.email;
      group.password = req.body.password;
            // save the group
            group.save(function(err) {
                if (err){
                  // res.send(err);
                  res.json({ error: 'Could not update group' });
                }

                res.json({ message: 'Group updated!' });
            });

        });

  })
  .get(function(req, res) {
    Group.findById(req.params.id, function(err, group) {
            if (err){
                // res.send(err);
                res.json({ error: 'Could not find group by id' });
              }
            res.json(group);
    });
  })
  .delete(function(req, res) {
        Group.remove({
            // name: req.params.name
          _id: req.params.id

        }, function(err, groups) {
            if (err){
              res.json({ error: 'Could not find group by id' });
              // res.send(err);
            }


            res.json({ message: 'Successfully deleted' });
        });
    });

router.route('/groups/user/:id')
  // adds user as an admin of a group
  .post(function(req, res) {
    Group.findById(req.body.groupid, function(err, group) {
      if (err) res.json({ error: 'Could not retrieve group' });
      group.admins.push(req.params.id);
      group.save(function(err) {
        if (err) res.json({ error: 'Could not save group' });
        res.json({ message: 'User added to group admins list.'});
      });
    });
  })
  // retrieves groups belonging to id
  .get(function(req, res) {
    Group.find({ admins: req.params.id }, function(err, groups) {
      if (err) res.json({ error: 'Could not retrieve groups' });
      res.json(groups);
    });
  });

module.exports = router;
