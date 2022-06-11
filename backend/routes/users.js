var express = require('express');
var router = express.Router();
var connection = require('../db_config');

router.get('/users', (req, res, next) =>{
  var getUsersQ = "SELECT * FROM `user`";

  connection.query(getUsersQ, function(err, result) {
      if (err)
      {
        console.log(err);
        res.send("Unable to get user table");
      }
      else {
        res.send(result);
      }
  });
});

module.exports = router;
