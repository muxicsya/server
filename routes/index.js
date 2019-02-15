var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router;
