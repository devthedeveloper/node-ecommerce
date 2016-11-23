var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var RouterFactory = require('node-express-crud-router').RouterFactory;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fonecasesdb');
var routes = require('./routes/index');
var users = require('./routes/users');
var product = require('./routes/product');
var app = express();

 var productmodel = require('./models/product');
var productRouter = RouterFactory.create({
  path: "product",
  model: productmodel
});

var addressmodel = require('./models/address');
var addressRouter = RouterFactory.create({
  path: "address",
  model: addressmodel
});

var brandmodel = require('./models/brand');
var brandRouter = RouterFactory.create({
  path: "brand",
  model: brandmodel
});

var cartmodel = require('./models/cart');
var cartRouter = RouterFactory.create({
  path: "cart",
  model: cartmodel
});

var categorymodel = require('./models/category');
var categoryRouter = RouterFactory.create({
  path: "category",
  model: categorymodel
});

var countrymodel = require('./models/country');
var countryRouter = RouterFactory.create({
  path: "country",
  model: countrymodel
});

var couponmodel = require('./models/coupon');
var couponRouter = RouterFactory.create({
  path: "coupon",
  model: couponmodel
});

var featuremodel = require('./models/feature');
var featureRouter = RouterFactory.create({
  path: "feature",
  model: featuremodel
});

var invoicemodel = require('./models/invoice');
var invoiceRouter = RouterFactory.create({
  path: "invoice",
  model: invoicemodel
});

var mediamodel = require('./models/media');
var mediaRouter = RouterFactory.create({
  path: "media",
  model: mediamodel
});

var ordermodel = require('./models/order');
var orderRouter = RouterFactory.create({
  path: "order",
  model: ordermodel
});

var paymodel = require('./models/pay');
var payRouter = RouterFactory.create({
  path: "pay",
  model: paymodel
});

var paymentmethodmodel = require('./models/paymentmethod');
var paymentmethodRouter = RouterFactory.create({
  path: "paymentmethod",
  model: paymentmethodmodel
});

var productmodel = require('./models/product');
var productRouter = RouterFactory.create({
  path: "product",
  model: productmodel
});

var reviewmodel = require('./models/review');
var reviewRouter = RouterFactory.create({
  path: "review",
  model: reviewmodel
});

var settingmodel = require('./models/setting');
var settingRouter = RouterFactory.create({
  path: "setting",
  model: settingmodel
});

var shippingmodel = require('./models/shipping');
var shippingRouter = RouterFactory.create({
  path: "shipping",
  model: shippingmodel
});

/*var usermodel = require('./models/user');
var userRouter = RouterFactory.create({
  path: "user",
  model: usermodel
});
*/
var wishlistmodel = require('./models/wishlist');
var wishlistRouter = RouterFactory.create({
  path: "wishlist",
  model: wishlistmodel
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/product', product);
app.use('/api',addressRouter);
app.use('/api',brandRouter);
app.use('/api',cartRouter);
app.use('/api',categoryRouter);
app.use('/api',countryRouter);
app.use('/api',couponRouter);
app.use('/api',featureRouter);
app.use('/api',invoiceRouter);
app.use('/api',mediaRouter);
app.use('/api',orderRouter);
app.use('/api',payRouter);
app.use('/api',paymentmethodRouter);
app.use('/api',productRouter);
app.use('/api',reviewRouter);
app.use('/api',settingRouter);
app.use('/api',shippingRouter);
//app.use('/api',userRouter);
app.use('/api',wishlistRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
