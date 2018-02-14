const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        genre: {
            type: String,
            unique: true,
            required: true
        },
        carouselitems: [{
            type: Schema.Types.ObjectId,
            ref: 'Item',
        }]
    }
);
module.exports = mongoose.model('Genre', GenreSchema)