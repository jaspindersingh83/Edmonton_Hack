const FacebookStrategy = require('passport-facebook');
const {FACEBOOK_APP_ID, FACEBOOK_APP_SECRET} = require('../../config');
const User = require('../models/UserModel.js');
const jwt = require('jsonwebtoken');
const {mysecret} = require('../../config')

const fbstrategy = new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret:FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:5000/auth/facebook/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { id } = profile;
      let myUser = profile;
      let fbUser = await User.findOne({ 'fbId': id });
      if (!fbUser) {
        // case #1
        fbUser = await User.create({
          fbId: id,
        });
      } 
      myUser.myfbUserJWT = jwt.sign(id,mysecret) 
      cb(null, myUser);
    },
  )


const fbLogin = (req,res) => {
  const token = req.user.myfbUserJWT;
  res.json({ token: token });
}

module.exports = {fbstrategy, fbLogin }