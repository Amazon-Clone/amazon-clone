var authController = {
  sendAuthFailed: function(req, res) {
      console.log(req.session);
      res.status(401).send('auth failed');
  },

  sendAuthSuccesful: function(req, res) {
    res.status(200).send('auth successful');
  },

  logout: function(req, res) {
      req.logout();
      res.status(200).send('logout successful');
  },

  authorize: function(req, res, next){

    if(!req.session.passport){
      res.status(401).send();
    }else {
      next();
    }
  },
};


module.exports = authController;
