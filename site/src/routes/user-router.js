var express = require('express');
var router = express.Router();
const path = require('path');

// ************ Controller Require ************
const userController = require('../controllers/user-controller');

router.get('/register', userController.showPageRegister);
router.post('/register', userController.register);

router.get('/login', userController.showPagelogin);
router.post('/login', userController.login);

router.get('/logout', userController.logout);

module.exports = router;
