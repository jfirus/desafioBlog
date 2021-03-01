var express = require('express');
var router = express.Router();

//Creo la variable para invocar al controlador de la API
const apiUserController = require('../../controllers/api/api-user-controller');

router.get('/:email', apiUserController.getUserbyemail);

module.exports = router;