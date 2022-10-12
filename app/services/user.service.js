const Users = require('../models/User')
const tokenGenerate = require('../generateToken/generateToken')
module.exports = async (req,res)=>{
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
  
