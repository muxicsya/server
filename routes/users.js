var express = require('express');
var router = express.Router();
const isLogin = require('../middlewares/isLogin')
const UserController = require('../controllers/UserController')

router.get('/', isLogin, UserController.getOne)

module.exports = router;
