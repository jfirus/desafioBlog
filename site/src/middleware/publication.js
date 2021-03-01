const path = require('path');
const { body } = require('express-validator');
const db = require('../database/models');

module.exports = {
    //Middleware para validar que siempre haya usuario logueado
    modify: [
        body('title')
            .notEmpty()
            .withMessage('El nombre es obligatorio'),
        body('body')
            .notEmpty()
            .withMessage('El apellido es obligatorio'),
        body("file")  
            .custom((value, { req }) => {
                if (req.file) {
                const acceptedExtensions = [".jpg", ".jpeg", ".png"];
                const ext = path.extname(req.file.originalname);
                if (acceptedExtensions.includes(ext)) {
                    return true;
                } else {
                    return false;
                }
                } else {
                return true;
                }
            })
            .withMessage("La extensión de la imágen no es válida (extensiones permitidas: .jpg, .jpeg y .png)"),
        body("userId")
            .custom((value, { req }) => {
                // Tengo que validar si el UserId de la publicación es igual al UserId que está logueado
                console.log(value);

                return db.Publications.findPk({
                    where: { id: req.body.publicationId }
                })
                .then(resul => {
                    if(resul){
                      return (req.sesion.id == user.userId)|| Promise.reject('NO COINCIDE');
                    }else{
                      return Promise.reject('El usuario no puede modificar la publicación de otro usuario ');
                    }
                })
            })
    ],
};