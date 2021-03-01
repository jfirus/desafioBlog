const db = require('../database/models');

const controller ={
    root: (req, res) =>{
        
        //Busco las publicaciones para cargar
        db.Publications.findAll({
            order: [['createdAt', 'DESC']]
        })
        .then((resultado) =>{

            return res.render('home', {resultado});
        })
        .catch(err => console.log(err))
        

    }

};

module.exports = controller;