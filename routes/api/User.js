var router = require('express').Router()
var Users = require('mongoose').model('User')

router.get("/", (req, res) => {
  Users.find().then(user => {
      return res.status(200).json({user})
  })
});


module.exports = router