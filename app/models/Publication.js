const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a schema for the publications collection. */
const publicationSchema = new Schema({
    description:{
        required: true,
        type: Text
    },
    refernces:{//search the type of refernces for the camp refernce
        type: String
    },
    state:{
        type:String,
    },
    id_product:{
        type: Schema.Types.ObjectId, ref:"Products"
    },
    id_user:{
        type: Schema.Types.ObjectId, ref:"Users"
    },
    id_question:{
        type: Schema.Types.ObjectId, ref:"QuestionsXResponses"
    }
});
module.exports = mongoose.model("Publications", publicationSchema);