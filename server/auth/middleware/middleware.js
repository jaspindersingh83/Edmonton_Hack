const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const User = require('../models/UserModel.js')
const BCRYPT_COST = 11;

const STATUS_USER_ERROR = 422;
const sendUserError = (err, res) => {
    res.status(STATUS_USER_ERROR);
    if (err && err.message) {
      res.json({ message: err.message, stack: err.stack });
    } else {
      res.json({ error: err });
    }
  };

async function hashPassword(req, res, next) {//same as const hashPassword = async(req,res) => 
    const {password, username} = req.body;
    bcrypt.hash(password, BCRYPT_COST, (err,hash) => {
        req.hashedPassword = hash;
        next();
    })
}

const validateUsernamePassword = (req,res,next) => {
    const {password, username, confirmPassword} = req.body;
    if(username.length < 5){
        return sendUserError(new Error('Your username must contain between 5 to 60 characters'), res);
    }
    if(password.length<6){
        return sendUserError(new Error('Your password must contain between 6 to 60 characters'), res);
    }
    if(password !== confirmPassword)  return sendUserError(new Error('Password and confirm password don\'t match'), res);
    next();
}

async function validateEmail(req, res, next){
    const {email} = req.body; 
    let tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const valid = tester.test(email);
    if(!valid){
        return sendUserError(new Error('Please enter a valid email id'), res);
    }
    next();
}

const matchPassword = async (req, res, next) => {
    const {password} = req.body;
    const {username} = req.body;
    const {email} = req.body;
    if (!password) return res.status(422).json({err: 'password required'});
    if(!email && !username) return sendUserError(new Error('Please enter either username or email'), res)
    try {
        var user = null;
        if(!email){
            user = await User.findOne({username});
        }
        if(!username){
            user = await User.findOne({email});
        }
        if(!user) return sendUserError(new Error('Sorry, we could not find an account with this username or email'), res);
        bcrypt.compare(password, user.passwordHash, (error, response) => {
            if (!response) {
                return sendUserError(new Error('Incorrect Password'), res);
            }
            req.username = user.username;
            next();
            });
    } catch (error){
        return sendUserError(new Error('Internal Error', res))
    }
 }


module.exports = {validateEmail,
                sendUserError,
                hashPassword,
                validateUsernamePassword,
                matchPassword}