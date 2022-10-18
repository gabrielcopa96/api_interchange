const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/* Creating a new schema for the chat collection. */
const exchangeSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId, ref: "Users"
    },
    id_product: {
        type: [Schema.Types.ObjectId], ref: "Products" // -> p
    },
    id_publication: {
        type: Schema.Types.ObjectId, ref: "Publications" // -> 
    },
    status: {
        type: String,
        enum: {
            values: ["Pendiente", "Rechazado", "Concretado"]
        }
    }
}, {
    versionKey: false
});

module.exports = mongoose.model("Exchanges", exchangeSchema);