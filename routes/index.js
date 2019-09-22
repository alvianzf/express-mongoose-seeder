var express = require('express');
var router = express.Router();
var Users = require('mongoose').model('User')

router.use('/api', require('./api'))

Users.UserSeed()

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json({message: 'please refer to the documentation'})
});

module.exports = router;
