var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
  res.sendFile(__dirname + "/views/users.html");
  //__dirname : It will resolve to your project folder.
});

module.exports = router;