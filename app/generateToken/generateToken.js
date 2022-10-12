const jwt = require('jsonwebtoken')
module.exports = (userCreteOrUserExisting)=>{
   return  jwt.sign({user:userCreteOrUserExisting},process.env.SECRET,{
        expiresIn:"1d"
    })
}