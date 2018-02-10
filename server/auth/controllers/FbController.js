const FacebookStrategy = require('passport-facebook');
const {FACEBOOK_APP_ID, FACEBOOK_APP_SECRET} = require('../../config');
const User = require('../models/UserModel.js');


const fbstrategy = new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:5000/auth/facebook/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      // 2 cases
      // #1 first time login
      // #2 previously logged in with facebook
      // #3 previously registered with email
      const { id, familyName, givenName,emails: [{ value }] } = profile;
      // []
      let fbUser = await User.findOne({fbId:id});

      console.log(fbUser);
      console.log(profile);

      if (!fbUser) {
        // case #1
        let username = givenName+familyName
        let password = familyName+givenName
        fbUser = await User.create({
          fbId: id,
          email: value,
          username,
          password
        });
      } else if (!fbUser.fbId) {
        // case #3
        // add email to user
        await fbUser.update({
          fbId: id,
        });
      }

      cb(null, fbUser);
    },
  )

module.exports = {fbstrategy}