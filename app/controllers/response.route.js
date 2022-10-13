const {newResponse} = require('../services/response.service.js')
const responseRegister = (req,res)=>{
    const body = req.body
    newResponse(body,res)
}

module.exports = {
    responseRegister
}