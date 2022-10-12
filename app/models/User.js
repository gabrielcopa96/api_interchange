const mongoose = require('mongoose');

/* Creating a schema for the user model. */
const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type:String
    },   
    surname:{
        required:true,
        type:String
    },
    image_profile: {
        type:String   
    },
    email:{
        required:true,
        type:String,
        unique:true,
        minLength:5,
        maxLength:50
    },
    username:{
        required: true,
        type:String
    },
    // password:{
    //     require:true,
    //     type:String
    // },
    typeUser:{
        required:true,
        type:String,
        enum:{
            values:['admin','usercommon'],
            message:'{VALUE} is not supported'
        }
    }
})
module.exports = mongoose.model('Users',userSchema);