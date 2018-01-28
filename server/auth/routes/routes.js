const {validateEmail,
        hashPassword,
        matchPassword} = require('../middleware/middleware');
const {createUser,getUsers,login} = require('../controllers/UserController')
module.exports = server => {
    server
        .route('/users')
        .post(hashPassword,validateEmail, createUser)
        .get(getUsers);
    server.route('/login').post(matchPassword,login);
    // server.route('/logout').post(matchPassword,logout);
};