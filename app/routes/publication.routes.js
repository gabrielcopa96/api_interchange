const {Router} =require('express');
const route = Router();
const {registerPublicationByPost,searchRegister, getPublicationById,deletePublicationXid} = require('../controllers/publication.controller') 


route.post("/",registerPublicationByPost);

route.get("/",searchRegister);

route.get('/:id', getPublicationById);

route.get("/:category",searchRegister);

route.delete("/:id",deletePublicationXid);

module.exports = route;