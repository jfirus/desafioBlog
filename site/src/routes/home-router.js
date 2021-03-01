var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const homeController = require('../controllers/home-controller');

router.get('/', homeController.root); /* GET - home page */

module.exports = router;
