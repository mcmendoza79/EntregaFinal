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
var usersRouter = require('./routes/admin/users');
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
app.use(fileupload({useTempFiles: true, tempFileDir:"/tmp/"}));
app.use("/api", cors(), apiRouter);

app.use(session({
  secret: "Adastra1",
  cookie: { maxAge: 3600000 }, // Duración de la cookie de sesión en milisegundos (1 hora en este ejemplo)
  resave: false,
  saveUninitialized: true
}));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/admin/login', loginRouter); 
  app.use('/admin/novedades', secured, novedadesRouter); 
  app.use('/admin/contacto', contactoRouter);
  app.use('/admin/comentarios', comentariosRouter);



// ejercicio

 /*app.get('/', (req, res) => {
  res.send('¡Hola mundo desde Express!');
});

app.get('/saludo', (req, res) => {
  res.send('¡Hola! ¿Cómo estás?');
});

app.get('/despedida', (req, res) => {
  res.send('¡Hasta luego!');
});


app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
module.exports = app;