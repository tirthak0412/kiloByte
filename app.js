var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var user_router=require('./routes/user_routes');
var userAuthRouter=require('./routes/login');
var adminAuthRouter=require('./routes/login_Admin_routes');
var deliveryAuthRouter=require('./routes/login_delivery_routes');
var productDetailsRouter=require('./routes/product_routes');
var categoryRouter=require('./routes/category_routes');
var addressRouter=require('./routes/address_routes');
var orderRouter=require('./routes/order_routes');
var assigndelivery=require('./routes/assign_delivery_driver_routes');
var updateDeliveryStatusRouter=require('./routes/update_delivery_Status_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user',user_router);
app.use('/userAuth',userAuthRouter);
app.use('/adminAuth',adminAuthRouter);
app.use('/deliveryAuth',deliveryAuthRouter);
app.use('/product',productDetailsRouter);
app.use('/category',categoryRouter);
app.use('/address',addressRouter)
app.use('/order',orderRouter);
app.use('/assigndriver',assigndelivery);
app.use('/updateStatus',updateDeliveryStatusRouter);

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
