const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;

const User = require('./models/user');
const config = require('./config');

module.exports = (passport) =>{
  passport.use(new Strategy((token, done) => {
    User.findOne({
      token: token
    },(err, user) =>{
      console.log(user);
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, user);
      }
      return done(null,user);
    });
    }
  ));
};
