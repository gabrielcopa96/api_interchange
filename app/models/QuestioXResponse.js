const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a new schema for the QuestionsXResponses collection. */
const questionxresponseSchema = new Schema({
    id_question:{
        type:Schema.Types.ObjectId,ref:'Questions'
    },
    id_response:{
        type:Schema.Types.ObjectId,ref:'Responses'
    }
})

module.exports = mongoose.model('QuestionsXResponses',questionxresponseSchema)
