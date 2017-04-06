var bcrypt = require('bcryptjs');
var app = require('../index.js');
var db = app.get('db');

var dbController = {
    getStoreElements: function (req, res, next) {
        db.getStoreElements(function (error, result) {
            if (error) {
                res.status(500).send(error);
            } else if (!result) {
                res.status(501).send();
            } else {
                req.result = result;
                next();
            }
        });
    },
    getProductById: function (req, res, next) {

        db.getProductById([req.params.id], function (error, result) {
            if (error) {
                res.status(500).send(error);
            } else if (!result) {
                res.status(501).send();
            } else {
                req.result = result;
                next();
            }
        });
    },

    checkoutCart: function (req, res, next) {

        var cartid;

        console.log(req.session.passport);

        var result = db.carts.insertSync({
            userid: req.session.passport.user
        }, function (error, result) {
            if (error) {
                res.status(500).send(error);
            }
        });

        var cartId = result[0].cartid;

        db.createCart([req.session.passport.user], function (error, result) {

            if (error) {
                res.status(500).send(error);
            } else {
                req.session.cart.forEach(function (element) {
                    db.checkoutCartElement([cartId, element.productid, element.optionid, element.quantity, element.discount], function (error, result) {
                        if (error) {
                            res.status(500).send(error);
                        }
                    });
                });
            }
        });

        res.status(200).send(cartId);
    },

    registerUser: function (req, res) {

        console.log(req.body);
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.userpassword);

        db.registerUser([req.body.useremail, req.body.userfirstname, req.body.userlastname, hash], function (err, result) {
            if (err) {
                res.status(500).send(err);
            }

            res.status(200).send(result);
        });
    },

    currentUser: function (req, res) {
        console.log(req.session);

        db.getNames(req.session.passport.user, function (err, result) {
            if (err) {
                res.status(404).send(err);
            } else {

                console.log(result);
                res.status(200).send(result[0]);
            }
        });
    }

};

module.exports = dbController;