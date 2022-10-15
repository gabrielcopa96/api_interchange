const mongoose = require('mongoose');

/* Creating a schema for the user model. */
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    surname: {
        required: true,
        type: String
    },
    image_profile: {
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true,
        minLength: 5,
        maxLength: 50
    },
    chat: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'Chats'
    },
    username: {
        required: true,
        type: String
    },
    publicaciones: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'Publications'
    },
    exchange: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'Exchanges'
    },
    typeUser: {
        required: true,
        type: String,
        enum: {
            values: ['admin', 'usercommon'],
            message: '{VALUE} is not supported'
        }
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('Users', userSchema);