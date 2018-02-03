const {validateEmail,
        hashPassword,
        matchPassword} = require('../middleware/middleware');
const {createUser,getUsers,login} = require('../controllers/UserController')
module.exports = server => {
    server
        .route('/signup')
        .post(hashPassword,validateEmail, createUser);
    server.route('/login').post(matchPassword,login);
    // server.route('/logout').post(matchPassword,logout);
};