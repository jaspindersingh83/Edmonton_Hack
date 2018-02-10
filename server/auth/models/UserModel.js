const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        isAdmin:{
            type: Boolean,
            default: false,
        },
        fbID: SchemaTypes.Long
    }
);
module.exports = mongoose.model('User', UserSchema)