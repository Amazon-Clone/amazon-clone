var passport = require('passport'),
  LocalStrategy = require('passport-local');

var bcrypt = require('bcryptjs');

function hashPasswordAndCompareToStoredHash(password, storedPasswordHash){
  return bcrypt.compareSync(password, storedPasswordHash);
}

var app = require('../index');
var db = app.get('db');

passport.use(new LocalStrategy({
    usernameField: 'useremail',
    passwordField: 'userpassword'
  }, function(useremail, userpassword, done){
      db.getUserAuthData([useremail], function(err, user){

        if(err){
          return done(err);
        }

        if(!user){
          return done(null, false, { message: 'Incorrect username.' });
        }

        user = user[0];

        if(hashPasswordAndCompareToStoredHash(password, user.storedpasswordhash)){
          return done(null, user);
        }else{
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
  }
));


passport.serializeUser(function(user, done){
  done(null, user.userid);
});

passport.deserializeUser(function(userId, done){
  db.getUserId([userId], function(err, result){
    var user = result[0];
    done(err, user);
  });
});

module.exports = passport;
