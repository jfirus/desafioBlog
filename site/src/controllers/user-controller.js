const db = require('../database/models');
const bcrypt = require('bcryptjs');


// Constante para definir el rol del usuario. Por defecto todos los que se loguean son tipo USER
const rolUsuario = {
    USER: 0,
    ADMIN: 1
};

const controller ={
    showPageRegister: (req, res) =>{
        return res.render('register')
    },
    register: (req, res) =>{
      
        let newUser = {
            name : req.body.name,
            lastname : req.body.lastname,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
            admin: rolUsuario.USER // USER: 0 o ADMIN:1 -->Por defecto, todos son 0 (USER)
        }       
        console.log(newUser);

          
        db.Users.create(newUser)
        .then(user =>{
            console.log(user.dataValues.password);
            delete user.dataValues.password;
            console.log(res.session);

            req.session.user = user.dataValues;
         
            if (user.dataValues.admin){
                req.session.admin = resultado.dataValues.admin;
            }
           
            console.log('Session:' + req.session);
            console.log('Usuario Agregado en la BD')
            return res.redirect('/');
        })
        .catch(err => console.log(err))
    },
    showPagelogin: (req, res) =>{
        //Muestro la página de logueo
        return res.render('login')
    },
    login: (req, res) =>{

        // Busco al usuario en la base de datos
        db.Users.findOne({
            where: {email:req.body.email}
        })
        .then(function(resultado){
            console.log(resultado);

            //Borro la contraseña
            delete resultado.dataValues.password;
                 
            req.session.user = resultado.dataValues;

            res.cookie('email', resultado.dataValues.email, {maxAge: 1000 * 60 * 60 * 24});
            res.cookie('admin', resultado.dataValues.admin, {maxAge: 1000 * 60 * 60 * 24});
            
            console.log('Usuario Logueado')
         
            // return res.render('/', {resultado});
            return res.redirect('/');
        })      
        .catch(err => console.log(err))
    },

    logout: (req, res) =>{
        // Deslogueo al usuario, borrando la session
        console.log('Estoy en el logout');

        req.session.destroy();
        
        console.log(req.cookies);
     
        //y borro la cookie si existe
        if (res.cookie.email){
            res.clear('email');
        }
        return res.redirect('/');
    } 

};

module.exports = controller;