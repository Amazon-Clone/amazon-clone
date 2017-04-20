var bcrypt = require('bcryptjs');
var app = require('../index.js');
var db = app.get('db');

var dbController = {
    getStoreElements: function (req, res, next) {
        db.getStoreElements(function (error, result) {
            if (error) {
                res.status(500).send(error);
            } else if (!result) {
                res.status(404).send();
            } else {
                res.status(200).send(result);
            }
        });
    },

    getCategories: function (req, res, next) {
        db.getCategories(function (error, result) {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).send(result);
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
                res.status(200).send(result);
            }
        });
    },

    checkoutCart: function (req, res, next) {

        // var cartid;

        // var result = db.carts.insertSync({
        //     userid: req.session.passport.user
        // }, function (error, result) {
        //     if (error) {
        //         console.log(error);
        //         res.status(500).send(error);
        //     }else{
        //         return result;
        //     }
        // });

        // console.log('my', result);

        db.createCart(req.session.passport.user, function(error, result){

            var cartid = result[0].cartid;

            req.session.cart.forEach(function (element) {

                console.log('my ', cartid);
                console.log('ement', element);


                db.checkoutCartElement([cartid, element.productid, element.optionid, element.quantity, element.discount], function (error, result) {
                    if (error) {
                        res.status(500).send(error);
                    }else{
                        res.status(200).send(result);
                    }
                });
            });
        });
    },

    registerUser: function (req, res) {

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

        db.getNames(req.session.passport.user, function (err, result) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.status(200).send(result[0]);
            }
        });
    }

};

module.exports = dbController;