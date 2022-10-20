const {Router} =require('express');
const route = Router();
const {registerPublicationByPost,searchRegister, getPublicationById,deletePublicationXid} = require('../controllers/publication.controller') 
const { checkJwt } = require('../middleware/session')

route.post("/", checkJwt, registerPublicationByPost);

route.get("/", checkJwt, searchRegister);

route.get('/:id', checkJwt, getPublicationById);

route.get("/:category", checkJwt, searchRegister);

route.delete("/:id", checkJwt, deletePublicationXid);

module.exports = route;