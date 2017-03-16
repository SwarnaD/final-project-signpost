var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening!');
  next();
});


router.use(require('./groups'));
router.use(require('./event'));
router.use(require('./auth'));
router.use(require('./users'));
router.get('/', function(req, res) {
  res.json({ message: "The API works!"});
});



// see this link for other useful routes (like getall, delete):
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

module.exports = router;
