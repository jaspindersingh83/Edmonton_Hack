const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true
        },
        passwordHash: {
            type: String,
        },
        isAdmin:{
            type: Boolean,
            default: false,
        },
        fbId: SchemaTypes.Long,
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
module.exports = mongoose.model('User', UserSchema)