const {registerPublication,selectAllOrCategory, getOnePublication,deletePublication} = require('../services/publication.service')

const registerPublicationByPost = ( req,res )=>{
    registerPublication(    req,res     );
}

const searchRegister = (    req,res  )=>{
    selectAllOrCategory(    req,res     );
}

const getPublicationById = (   req, res   ) => {
    
    const {  id  } = req.params
    getOnePublication(  id, res )
}

const deletePublicationXid = (  req,res )=>{
    const {  id  } = req.params 
    deletePublication(id, res)
}
module.exports={
    registerPublicationByPost,
    searchRegister,
    getPublicationById,
    deletePublicationXid,
}