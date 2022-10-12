const mongoose = require('mongoose')
const Schema =mongoose.Schema;

/* Creating a new schema for the chat collection. */
const exchangeSchema = new Schema({
    id_User:{
      type: Schema.Types.ObjectId, ref:"Users"  
    },
    id_Product:{
      type: Schema.Types.ObjectId, ref:"Products"
    }
});

module.exports = mongoose.model("Exchanges",exchangeSchema);