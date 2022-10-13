const { Schema } = require('mongoose');
const mongoose = require('mongoose');
// const Category = mongoose.model('Categorys')
/* Creating a new schema for the responses collection. */
const responseSchema = new mongoose.Schema({
    message:{
        type: String
    },
    id_user:{
        type: Schema.Types.ObjectId, ref:"Users"
    }
});
module.exports = mongoose.model('Responses',responseSchema);