const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        genre: {
            type: String,
            required: true,
            unique: true
        },
        carouselitems: [{
            type: Schema.Types.ObjectId,
            ref: 'Item',
        }],
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
module.exports = mongoose.model('Genre', GenreSchema)