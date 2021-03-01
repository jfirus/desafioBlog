const createError = require('http-errors');
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session'); // Requerirlo como entry point de la aplicación
//const  userSession = require('./middleware/userSession');
//const  userCheck = require('./middleware/check');

const app = express();
// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ***** Middlewares ***** */
// Para el POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); 
app.use(session({ secret: "Mensaje Secreto", resave: false, saveUninitialized: true}));

// Creo las variables para los routes
let homeRouter = require('./routes/home-router');
let userRouter = require('./routes/user-router');
let publicacionRouter = require('./routes/publication-router');

// Manejo de rutas Para la API
let apiUserRouter = require('./routes/api/api-user-router');
let apiPublicationRouter = require('./routes/api/api-publicarion-router');

//********** ACCESO A LAS RUTAS **********
app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/publication', publicacionRouter);

//Acceso a las Rutas para las APIS
app.use('/api/user', apiUserRouter);
app.use('/api/publication', apiPublicationRouter);

// Para Uso de la session}
//app.use(userSession);

//app.use(userCheck);

module.exports = app;
