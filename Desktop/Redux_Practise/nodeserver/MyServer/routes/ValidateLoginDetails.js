var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var msg = "Welcome to Server side Data ";
  var resData = {
    msg: msg
  }
  res.send(JSON.stringify(resData));



});

module.exports = router;
