const Genre = require('../models/GenreModel')

const createGenre = async (req,res) => {
    const {genre} = req.body;
    try{
        await Genre.create({genre});
        res.status(200).json({success:true})
    } catch(error) {
        res.status(422).json({error})
    }
}

const getGenre = async (req,res) => {
    try{
        let allGenres = await Genre.find({});
        res.status(200).json({allGenres})
    } catch(error) {
        res.status(422).json({error})
    }
}

module.exports = {createGenre, getGenre}