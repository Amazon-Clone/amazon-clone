//REQUIRING MODULES
var massive = require('massive');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


//DECLARING APP, ALSO MAKING IT AVAILABLE FOR PASSPORT SERVICE
var app = module.exports = express();
var port = 9876;

//REQUIRING GITIGNORED SECRET KEYS

var keys = require('./keys.js');

//CONNECT db USING connectionString
var connectionStringElephant = "postgres://jmmxkwaq:vo_av5qlV2z0AMVJu4WVlKDtpX8DQ-Sd@stampy.db.elephantsql.com:5432/jmmxkwaq";
var connectionStringLocal = "postgres://postgres:25thnight@localhost/amazon-clone"

var massiveInstance = massive.connectSync({
    connectionString: connectionStringLocal,
});

//SET db PROPERTY FOR BEING ABLE TO USE IT APPLICATION WIDE

app.set('db', massiveInstance);
var db = app.get('db');

//ADD BODY PARSER

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//CONFIGURE AND ADD SESSION, INITIALIZE PASSPORT AND ADD IT, INITIALIZE PASSPORT SESSION AND ADD IT

app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: keys.sessionSecretKey
}));


//GET PRE CONFIGURED PASSPORT INSTANCE

var passport = require('./services/passport.js');
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/login/success',
    failureRedirect: '/api/login/failure',
    failureFlash: false
}));

//REQUIRING CONTROLLERS

var dbController = require('./controllers/dbController.js');
var cartController = require('./controllers/cartController.js');
var authController = require('./controllers/authController.js');
var stripeController = require('./controllers/stripeController.js');

//ADD STATIC SERVE

app.use(express.static(__dirname + '/public-alt'));

//AUTH METHODS

app.get('/api/login/success', authController.sendAuthSuccesful);
app.get('/api/login/failure', authController.sendAuthFailed);
app.post('/api/logout', /*authController.authorize,*/ authController.logout); //AUTHORIZE MAKES IT REQUIRE LOGIN
app.post('/api/register', dbController.registerUser);

//PRODUCT DATA METHODS

app.get('/api/store', dbController.getStoreElements, function(req, res){
  res.status(200).send(req.result);
});

app.get('/api/product/:id', dbController.getProductById, function(req, res){
  res.status(200).send(req.result);
});


//CART METHODS

app.post('/api/cart', cartController.addProductToCart);
app.get('/api/cart', cartController.getCart);
app.post('/api/cart/checkout', /*authController.authorize,*/ dbController.checkoutCart); //AUTHORIZE MAKES IT REQUIRE LOGIN
app.post('/api/cart/clear', cartController.clearCart);
app.post('/api/cart/delete', cartController.deleteCartElement);
app.post('/api/cart/update', cartController.updateCartElement);

//TEST METHODS

app.post('/api/cart/charge', /*authController.authorize,*/ stripeController.makePayment); //AUTHORIZE MAKES IT REQUIRE LOGIN

//LISTEN TO PORT X
app.listen(port, function() {
    console.log('Listening on port: ', port);
});
