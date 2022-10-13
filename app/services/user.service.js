const Users = require('../models/User')
const tokenGenerate = require('../generateToken/generateToken')
module.exports = async (req,res)=>{
  /* The above code is a function that is being exported from a file called auth.js. The function is
  called signup and it is a post request. The function is using the mongoose library to connect to a
  mongoDB database. The function is using the mongoose library to create a new user in the database.
  The function is also using the mongoose library to find a user in the database. The function is
  using the jsonwebtoken library to create a token. The function is using the bcrypt library to hash
  a password. The function is using the express library to */
    const {email} = req.body;
    let token = "";
    try {
        const response = await Users.find({
            email
        })
        if(response.length === 0){
            const userData = new Users(
                req.body
            )
            await userData.save()
            token = tokenGenerate(userData)
         return   res.status(200).json({
                msg:"Usuario creado con exito",
                user:userData,
                token
            })
        }
        token=tokenGenerate(response)
            return res.status(200).json({
                msg:"usuario encontrado",
                token
        })
        
    } catch (error) {
      return  res.status(400).json({
            msg: "algo salio mal"
        })        
    }
    
}
