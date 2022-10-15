const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a new schema for the messages collection. */
const messageSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId, ref: "Users"
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Messages', messageSchema);