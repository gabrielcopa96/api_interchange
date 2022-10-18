const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Creating a schema for the publications collection. */
const publicationSchema = new Schema({

    references: {//search the type of refernces for the camp refernce
        type: String
    },
    state: {
        type: String,
    },
    id_product: {
        type: Schema.Types.ObjectId, ref: "Products"
    },
    id_user: {
        type: Schema.Types.ObjectId, ref: "Users"
    },
    id_questionxresponse: {
        type: [Schema.Types.ObjectId], ref: "QuestionsXResponses"
    },
    id_categoria: {
        type:Schema.Types.ObjectId, ref: "Categorys"
    },
    eliminated:{
        type: Boolean,
        default:false,
    }
}, {
    versionKey: false
});
module.exports = mongoose.model("Publications", publicationSchema);