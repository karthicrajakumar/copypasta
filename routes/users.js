var express = require('express');
var router = express.Router();
var User = require('../app/models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({},function(err,docs){
  	return res.json({docs:docs});
  })
});

module.exports = router;
