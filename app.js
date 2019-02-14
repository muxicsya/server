require('dotenv').config()
var createError = require('http-errors');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require('mongoose')

<<<<<<< HEAD
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musicRouter = require('./routes/music');
=======
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var musicRouter = require('./routes/music')
>>>>>>> 6b98543bae79ff5960d48168583578a0d93e23e0
var lyricsRouter = require('./routes/lyrics');
var DB = process.env.DB || 'musicx'

var app = express();
mongoose.connect(`mongodb://localhost/${DB}`,{ useNewUrlParser: true } )

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/musics', musicRouter)
=======
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/music', musicRouter);
>>>>>>> 6b98543bae79ff5960d48168583578a0d93e23e0
app.use('/lyric', lyricsRouter);

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

module.exports = app;
