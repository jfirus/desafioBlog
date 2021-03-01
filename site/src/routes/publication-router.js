var express = require('express');
var router = express.Router();

const multer = require('multer'); // Upload de archivos
const path = require('path'); // Manejo de los Path
//const validator = require('../middlewares/validator');
//const publication = require('../middlewares/publication');


// ************ Controller Require ************
const publicacionontroller = require('../controllers/publication-controller');

// *** Código de MULTER ***
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname+ '../../../public/img/publication'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  //var upload = multer({ storage: storage })
  // Valida la extensión del archivo
  let upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
      const ext = path.extname(file.originalname);
  
      if(!acceptedExtensions.includes(ext)){
        req.file = file;
      }
      cb(null, acceptedExtensions.includes(ext));
    }
    
  });

router.get('/create', publicacionontroller.showPage);
router.post('/create', upload.single('file'), publicacionontroller.create); // Post con los datos de la publicación para almacenarla en la BD

router.get('/publication-detail/:publicationId', publicacionontroller.detail); 
router.get('/publication-comment/:publicationId', publicacionontroller.showPagecomment);
router.post('/addComment', publicacionontroller.addComment);
router.get('/publication-list', publicacionontroller.findPublicationbyUserId);

router.post('/edit/:publicationId', upload.single('file'), publicacionontroller.edit);
router.post('/delete/:publicationId', publicacionontroller.delete);

module.exports = router;