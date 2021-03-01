const db = require('../database/models');
const bcrypt = require('bcryptjs');
const comment = require('../database/models/comment');

// Constante para definir el rol del usuario. Por defecto todos los que se loguean son tipo USER
const rolUsuario = {
    USER: 0,
    ADMIN: 1
};

const controller={
    showPage: (req, res) =>{
        return res.render('publication-create')
    },
    detail: (req, res) =>{
        //Busco la publicación
        db.Publications.findByPk(req.params.publicationId)
        .then((publication) =>{
            return res.render('publication-detail', {publication});
        })
        .catch ((reason) => {
            console.log(reason);
        })        
        
    },
    create: (req, res) =>{
        // Creación de la publicación en la BD
        let newpublication = {
            title : req.body.title,
            body : req.body.body,
            image : (req.file)? req.file.filename : 'default.png',
            userId: req.session.user.id
        }    

        console.log(newpublication);        
        
        db.Publications.create(newpublication)
        .then(publication =>{
            
           console.log('Publicación Agregada en la BD')
            return res.redirect('/');
        })
        .catch(err => console.log(err))
    },
    showPagecomment: (req, res) =>{

        // Con el ID que me llega por parámetro busco la publicación
        db.Publications.findAll({
            where: {
                id: req.params.publicationId
              },
            include: [{association: 'CommentsPublication'}]
        })
        .then((resultado) =>{

            //Me devuelve un array de objetos literal, por eso tomo
            let publication = resultado[resultado.length-1];
            // Guardo en un array el objeto devuelto por el sequelize
            arrayComment = resultado[0].CommentsPublication;
           
            //Genero un nuevo array de objetos literales
            let aryComment  = arrayComment.map(elemento => {
                return ({
                    id:elemento.id,
                    comment: elemento.comment,
                    publicationId: elemento.publicationId,
                    userId: elemento.userId
                })
            });
            console.log('******');
            return res.render('publication-comment', {publication, aryComment});
        })
        .catch(err => console.log(err))
      
    },
    addComment: (req, res) =>{
        // Agrego el comentario a la base de datos
        console.log(req.session.user)
        
        let itemComment = {
            comment: req.body.comment,
            publicationId: req.body.publicationId,
            userEmail: req.session.user.email
        }

        db.Comments.create(itemComment)
        .then(comment =>{
            
           console.log('Comentario Agregado en la BD')
           return res.redirect('/publication/publication-comment/' + req.body.publicationId);

        })
        .catch(err => console.log(err))
    },
    findPublicationbyUserId:(req, res) =>{
        // Busco todas las publicaciones de un determinado usuario
        db.Publications.findAll({
            where: {
                userId: req.session.user.id
              },
            order: [['createdAt', 'DESC']]
        })
        .then((publications) =>{

           return res.render('publication-list', {publications});
        })
        .catch(err => console.log(err))
    },
    edit:(req, res) => {
        //Tomo los nuevos valores y los reemplazo en la página
    
        let updatePublication = {
            title : req.body.title,
            body : req.body.body,
            image : (req.file)? req.file.filename : req.body.image,
        }    

        db.Publications.update(updatePublication,{
            where:{ id: req.params.publicationId}
        })
        .then(publication =>{
            
           console.log('Publicación editada en la BD')
           return res.redirect('/');
        })
        .catch(err => console.log(err))
    },
    delete: (req, res) => {
        db.Publications.destroy({
            where: {
                id: req.params.publicationId
            }
        })
        .then(function(){
          return res.redirect('publication-list');
        });  
    },

};

module.exports = controller;