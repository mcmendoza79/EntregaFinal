var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session= require("express-session");
var fileupload= require("express-fileupload")
var cors= require("cors");
require("dotenv").config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var novedadesRouter = require('./routes/admin/novedades');
var contactoRouter = require('./routes/admin/contacto');
var comentariosRouter = require('./routes/admin/comentarios');
var apiRouter = require('./routes/api');
var app = express();
const port = 8080;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", cors(), apiRouter);

app.use(session({
  secret: "Adastra1",
  cookie: { maxAge: 3600000 }, // Duración de la cookie de sesión en milisegundos (1 hora en este ejemplo)
  resave: false,
  saveUninitialized: true
}));



  app.use(fileupload({
    useTempFiles: true, 
    tempFileDir:"/tmp/"
  }));


  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/admin/login', loginRouter); 
  app.use('/admin/novedades', secured, novedadesRouter); 
  app.use('/admin/contacto', contactoRouter);
  app.use('/admin/comentarios', comentariosRouter);



module.exports = app;