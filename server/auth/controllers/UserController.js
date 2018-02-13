const User = require('../models/UserModel.js');
const jwt = require('jsonwebtoken');
const {mysecret} = require('../../config.js')


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

module.exports= {createUser,login,logout,isAdmin};