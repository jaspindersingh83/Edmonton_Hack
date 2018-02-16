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
        }]
    }
);
module.exports = mongoose.model('Genre', GenreSchema)