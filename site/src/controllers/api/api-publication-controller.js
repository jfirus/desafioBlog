const db = require('../../database/models');

const controller = {
        
    getAllPublication: (req,res) =>{
        
        db.Publications.findAll({
            order: [['createdAt', 'DESC']]
        })
        .then((resultado) =>{
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
    },
    
    setLike: (req,res) =>{
        console.log('Entró a la API del set Like')
        console.log('Parámetros enviados: id: '+ req.body.id + '/ likes: ' + req.body.likes)
        // Busco en la tabla publicación por el id de publicación pasado por parámetro y le + incremento la cantidad de likes

        db.Publications.update({
            likes: Number(req.body.likes)+1
        },
        {
            where: {
                id: req.body.id
            }
        })
        .then((resultado) =>{
            console.log(resultado);

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

