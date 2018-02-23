const User = require('../models/UserModel.js');
const jwt = require('jsonwebtoken');
const moment = require('moment'); 
const {mysecret, adminemail, adminusername, adminpassword} = require('../../config.js');
const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: adminusername,
        pass: adminpassword
    }
  });


const createUser = async(req,res) => {
    const {username} = req.body;
    if (!username) return res.status(422).json({err: 'Username and email required'});
    const {email} = req.body;
    const {hashedPassword} = req;
    try {
        const result = await User.create({ username,email, passwordHash: hashedPassword })
        res.status(200).json(result);
    } catch (error) {
        res.status(422).json({message:error});
    }
};

const updateUserPassword = async(req,res, next) => {
    const {hashedPassword} = req;
    const username = req.decoded.username;
    try {
        const user = await User.findOne({username})
        const email = user.email;
        const result = await User.update({username},{ passwordHash: hashedPassword, updatedAt: moment() })
        req.email = email
        next();
    } catch (error) {
        res.status(422).json({message:error});
    }
};

const sendResetPasswordEmail = async(req,res) => {
    const email = req.email
    const mailOptions = {
        to: email,
        from: adminemail,
        subject: 'Litchi Password Has been Changed',
        text: 
        'Your Litchi password has been successfully changed .\n\n' +
        'Thanks Team Litchi'
    };
    try{
        await smtpTransport.sendMail(mailOptions);
        res.status(200).json({success:true});
    } catch(error){
        return res.status(422).json({message:'Email could not be sent'})
    }
}


//login
const login = async(req,res) => {
    const username = req.username;
    const isAdmin = req.isAdmin
    const payload = {username, isAdmin};
    const token = await jwt.sign(payload,mysecret);
    res.status(200).json({token});
}
//logout
const logout = async(req,res) => {
    res.status(200).json({success:true});
}

const isAdmin = async(req, res) => {
    const isAdmin = req.decoded.isAdmin;
    if(isAdmin) return res.status(200).json({success:true})
    else{
        return res.status(422).json({message:'You are not authorized as admin'})
    }
}

const forgotPassword = async(req,res,next) => {
    let {email} = req.body;
    let username = email;
    try {
        const user = await User.find().or([{username},{email}])
        username = user[0].username;
        email=user[0].email
        let isAdmin = user[0].isAdmin;
        const payload = {username, isAdmin};
        const token = await jwt.sign(payload,mysecret,{ expiresIn: "2h" });
        req.email = email;
        req.username = username;
        req.token = token;
        next();
    } catch( error){
        res.status(422).json({message:'No such user found'})
    }
}
const sendResetEmailAndRedirect = async (req,res) => {
    let email = req.email;
    let token = req.token;
    let username = req.username;
    const mailOptions = {
        to: email,
        from: adminemail,
        subject: 'Litchi Password Reset',
        text: `Hi ${username}\n\n`+
        'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        `http://35.185.250.160/:3000/reset?${token}\n\n` +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n\n'+
        'Thanks Team Litchi'
    };
    try{
        await smtpTransport.sendMail(mailOptions);
        res.status(200).json({success:true});
    } catch(error){
        return res.status(422).json({message:'Email could not be sent'})
    }
}

module.exports= {createUser,
    login,logout
    ,isAdmin, 
    forgotPassword,
    sendResetEmailAndRedirect,
    updateUserPassword, 
    sendResetPasswordEmail
};