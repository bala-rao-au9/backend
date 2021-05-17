const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:"thisisrandomstuff",
  resave:false,
  saveUninitialized:false
}))

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    err.status = err.status || 500;
    err.message = err.message || 'Something went Wrong' 
    res.json({
      status:'failed',
      message:err.message
    })
});

const port = 5000;
app.listen(port, ()=>{
  console.log(`server is listening on ${port}`)
})
module.exports = app;
