const {Router} =require('express');
const route = Router();
const {registerPublicationByPost,searchRegister, getPublicationById} = require('../controllers/publication.controller') 


route.post("/",registerPublicationByPost);

route.get("/",searchRegister)

route.get('/:id', getPublicationById)

route.get("/:category",searchRegister)

module.exports = route;