var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.get('forgot-password',function(req,res){
  res.send('forgot passs');
});

router.post('login',function(req,res){
  let password = res.body.password;
  if (password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    if(regex.test(password)){
      res.json("password validated");
    }else{
      res.json("password should have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum of 8 characters, and maximum of 16 characters");
    }
    res.json(err);
  } else {
      res.json("please enter details"); //or return count for 1 & 0
  }
});

module.exports = router;
