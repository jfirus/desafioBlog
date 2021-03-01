/*
const log = (req, res, next) => {

    //res.locals.user = false; // Inicializo la variable en FALSE
    console.log('Estoy en el middleware');

    if(req.cookies.email){
        // Si existe la cookie la busco en la base de datos
        db.Users.findOne({
            where: {email:req.cookies.email}
        })
        .then(function(user){
              
            delete user.password; 
            req.session.user = user.dataValues; // Guardo al usuario en sesión
            res.locals.user = user.dataValues; // Guardo los datos del usuario en la variable Locals para que sean visibles por la vista
            return next();
        })
        .catch(err => console.log(err))
    }else{
        //Si no está logueado, y no tiene cuenta, ni nada, le digo que continúe
        return next();
    }
}
module.exports = log;
*/