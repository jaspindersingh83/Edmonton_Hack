const {validateEmail,
        hashPassword,
        matchPassword,
        validateUsernamePassword} = require('../middleware/middleware');
const {createUser,getUsers,login} = require('../controllers/UserController')
module.exports = server => {
    server
        .route('/signup')
        .post(validateUsernamePassword, validateEmail, hashPassword, createUser);
    server.route('/login').post(matchPassword,login);
    // server.route('/logout').post(matchPassword,logout);
};