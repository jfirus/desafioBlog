function cookiemiddleware (req, res, next){
    
    if (req.cookie.email != undefined && 
        req.session.user == undefined){

            //Busco el usuario por email para obtener todos los datos
            db.Users.findOne({
                where: {email:req.cookie.emai}
            })
            .then(function(resultado){
                // Borro la password
                delete resultado.dataValues.password; 
                //Guardo en sessión
                req.session.user = resultado.dataValues;
                next();
            })      
            .catch(err => console.log(err))
    }else{
        next();
    }
}
module.exports = cookiemiddleware;
