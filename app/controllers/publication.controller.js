const {registerPublication,selectAllOrCategory, getOnePublication} = require('../services/publication.service')

const registerPublicationByPost = (req,res)=>{
    registerPublication(req,res);
}

const searchRegister = (req,res)=>{
    selectAllOrCategory(req,res);
}

const getPublicationById = (req, res) => {
    
    const { id } = req.params
    getOnePublication(id, res)
}
module.exports={
    registerPublicationByPost,
    searchRegister,
    getPublicationById
}