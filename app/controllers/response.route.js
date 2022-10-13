const {newResponse} = require('../services/response.service.js')
const responseRegister = (req,res)=>{
    newResponse(res)
}

module.exports = {
    responseRegister
}