const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a new schema for the questions collection. */
const questionSchema = new Schema({
    message:{
        type:Text
    },
    id_user:{
        type: Schema.Types.ObjectId,ref:"Users"
    }
})
module.exports = mongoose.model('Questions',questionSchema)
