const db = require('../../database/models');

const controller = {
        
    getUserbyemail: (req,res) =>{
        
        db.Users.findOne({
            where: {email:req.params.email}
        })
        .then((resultado) =>{
            delete resultado.dataValues.password;
            let jsonResult = {
                meta: {
                    status: 200,
                    length: resultado.length,
                    url: req.originalUrl
                },
                data: resultado
            }   
            return res.send(jsonResult);
        })
        .catch(error=>{
            console.log(error);
            let jsonResult = {
                meta: {
                    status: 404                
                },
                data: 'Error Access'
            }    
            return res.send(jsonResult);
        })
    }

};
module.exports = controller;

