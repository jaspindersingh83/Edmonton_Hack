const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        genre:{
            type: Schema.Types.ObjectId,
            ref: 'Genre',
        },
        maleLead: String,
        femaleLead: String,
        comedian: String,
        director: String,
        description: String,
        thumbnailUrl: {
            type: String,
            required: true
        },
        coverImageUrl: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            required: true
        }, 
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    }
);
module.exports = mongoose.model('Item', ItemSchema)