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

const getUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(422).json({message:'Could note get all users'})
    }
};
//login
const login = async(req,res) => {
    const username = req.username;
    const payload = {username};
    const token = jwt.sign(payload,mysecret);
    res.status(200).json({token});
}
//logout
// const logout = async(req,res) => {
//     const username = req.username;
//     const payload = {username};
//     const token = jwt.sign(payload,mysecret);
//     res.status(200).json({token});
// }



module.exports= {createUser,getUsers,login};