const {validateEmail,
        hashPassword,
        matchPassword,
        validateUsernamePassword} = require('../middleware/middleware');
const {authenticate} = require('../../common/common')
const {createUser,getUsers,login,isAdmin} = require('../controllers/UserController')
const passport = require('passport')
const {fbstrategy, fbLogin} = require('../controllers/FbController')
passport.use(fbstrategy);


module.exports = server => {
    server
        .route('/signup')
        .post(validateUsernamePassword, validateEmail, hashPassword, createUser);
    server
        .route('/login')
        .post(matchPassword,login);
    // server.route('/logout').post(matchPassword,logout);
    server
        .route('/auth/facebook')
        .get(passport.authenticate('facebook'));
    server
        .route('/auth/facebook/callback')
        .get(passport.authenticate('facebook', {
        failureRedirect: '/login',
        session: false}), fbLogin);
    server
        .route('/admin')
        .get(authenticate, isAdmin)
};