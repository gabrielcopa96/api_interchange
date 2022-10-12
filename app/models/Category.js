const mongoose = require('mongoose');

/* Creating a new schema for the category model. */
const categorySchema = new mongoose.Schema({
    name:{
        required: true,
        type:String
    }
})
module.exports = mongoose.model('Categorys',categorySchema);