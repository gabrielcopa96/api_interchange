const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a new schema for the messages collection. */
const messageSchema = new Schema({
    date:{
        Type: Date , default: Date.now
    },
    id_user:{
        type: Schema.Types.ObjectId, ref:"Users"
    }
});

module.exports = mongoose.model('Messages',messageSchema);