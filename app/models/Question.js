const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a new schema for the questions collection. */
const questionSchema = new Schema({
    message:{
        type:Text
    },
    title: {
        type: String,
        default: 'Question'
    },
    id_user:{
        type: Schema.Types.ObjectId,ref:"Users"
    }
})
module.exports = mongoose.model('Questions',questionSchema)

// -> QUESTIONXRESPONSE -> QUESTION -> ID_USER -> USERNAME
// find()
// .populate(path: 'question', { path: 'id_user', select: 'username'})
// .populate(path: 'response', { path: 'id_user', select: 'username'}) 