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
    const {password} = req.body;
    if(!password || password.length<8){
        return sendUserError(new Error('Please send a valid password with minimum 8 characters'), res);
    }
    bcrypt.hash(password, BCRYPT_COST, (err,hash) => {
        req.hashedPassword = hash;
        next();
    })
}

async function validateEmail(req, res, next){
    const {email} = req.body; 
    if(!email ){
        return sendUserError(new Error('Please enter an email'), res);
    }
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
        if(!user) return sendUserError(new Error('No such user found'), res);
        bcrypt.compare(password, user.passwordHash, (error, response) => {
            if (!response) {
                return sendUserError(new Error('Password dont match'), res);
            }
            next();
            });
    } catch (error){
        return sendUserError(new Error('Internal Error', res))
    }
 }
const authenticate = (req, res, next) => {
    const token = req.get('Authorization');
    if (token) {
      jwt.verify(token, mysecret, (err, decoded) => {
        if (err) return res.status(422).json(err);
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).json({
        error: 'No token provided, must be set on the Authorization Header'
      });
    }
  };

module.exports = {validateEmail,
                sendUserError,
                hashPassword,
                matchPassword}