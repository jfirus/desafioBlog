module.exports = (req, res, next) => {
    //Middleware para validar que siempre haya usuario logueado
    
    if(typeof req.session.user !== 'undefined') {
        if(req.url === '/login') {
            return next();
        }else{
            return res.redirect('/login');
        }
    }
};