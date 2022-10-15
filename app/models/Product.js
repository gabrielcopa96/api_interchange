const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Category = mongoose.model('Categorys')
/* Creating a new schema for the messages collection. */
const productSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    image: {
        type: String
    },
    id_category: {
        type: [Schema.Types.ObjectId], ref: "Categorys"
    },
    id_user: {
        type: Schema.Types.ObjectId, ref: "Users"
    }
});

module.exports = mongoose.model('Products', productSchema);