var express = require('express');
var router = express.Router();

//Creo la variable para invocar al controlador de la API
const apiPublicationController = require('../../controllers/api/api-publication-controller');

router.get('/', apiPublicationController.getAllPublication);
router.post('/setLike', apiPublicationController.setLike);

module.exports = router;