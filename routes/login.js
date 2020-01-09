var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

router.use(cookieParser());

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

 router.post('/', function (req, res, next) {
  var { email, password } = req.body;
  User.findOne({ email })
    .then(function (user) {
      if (!user) {
        return res.status(404).send({ "message": "invalid email" });
      } else {
        var hash = user.password;
        if (bcrypt.compareSync(password, hash)) {
          
          const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
          return res.cookie('token', token, {
            expires: new Date(Date.now() + expiration),
            secure: false, // set to true if your using https
            httpOnly: true,
          });
        } else {
          return res.status(401).send({ "message": "invalid email" });
        }
      }
    }).catch(next)
});

module.exports = router;