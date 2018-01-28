const User = require('../models/UserModel.js')
const jwt = require('jasonwebtoken')

const createUser = async(req,res) => {
    const {username} = req.body;
    if (!username) return res.status(422).json({err: 'username required'});
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
const login = async(req,res) => {
    const username = req.username;
    const payload = {usernam:username};
    const token = jwt.sign(payload,mysecret);
}

module.exports= {createUser,getUsers,login};