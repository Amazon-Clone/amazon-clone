var keys = require('../keys.js');
var stripe = require('stripe')(keys.stripeSecretKey);
var app = require('../index.js');

var db = app.get('db');

var stripeController = {
    makePayment: function(req, res, next) {

        var user = db.users.findSync({
            userid: req.session.passport.user
        });

        useremail = user[0].useremail;

        console.log(user);


        var amount = req.session.cart.reduce(function(sumTotal, currElement) {
            return sumTotal + currElement.quantity * currElement.optionprice;
        }, 0);

        // Create a new customer and then a new charge for that customer:
        stripe.customers.create({
            email: useremail
        }).then(function(customer) {
            return stripe.customers.createSource(customer.id, {
                source: {
                    object: 'card',
                    exp_month: req.body.exp_month,
                    exp_year: req.body.exp_year,
                    number: req.body.cardnumber,
                    cvc: req.body.cvc
                }
            });
        }).then(function(source) {
            return stripe.charges.create({
                amount: amountToPennies(amount),
                currency: 'usd',
                customer: source.customer
            });
        }).then(function(charge) {
            res.status(200).send(charge);
        }).catch(function(err) {
            res.status(400).send(err);
        });

    }
};


var amountToPennies = function(amount) {
    return Math.floor(amount * 100);
};


module.exports = stripeController;
