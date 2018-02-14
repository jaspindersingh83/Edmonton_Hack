const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true
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
            unique: true,
            required: true
        },
        imageUrl: {
            type: String,
            unique: true,
            required: true
        },
        videoUrl: {
            type: String,
            unique: true,
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