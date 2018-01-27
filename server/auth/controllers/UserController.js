const User = require('../models/UserModel.js')

const createUser = async(req,res) => {
    const {username} = req.body;
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
const getMe = (req,res) =>{
    const username = req.session.user;
    res.status(200).json({username})
};

module.exports= {createUser,getUsers,getMe};