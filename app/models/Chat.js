const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a new schema for the hat collection. */
const chatSchema = new Schema({
    id_message: {
        type: [Schema.Types.ObjectId], ref: "Messages"
    }
});

module.exports = mongoose.model("Chats", chatSchema);