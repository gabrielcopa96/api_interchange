const {registerPublication,selectAllOrCategory} = require('../services/publication.service')

const registerPublicationByPost = (req,res)=>{
    registerPublication(req,res);
}

const searchRegister = (req,res)=>{
    selectAllOrCategory(req,res);
}
module.exports={
    registerPublicationByPost,
    searchRegister
}