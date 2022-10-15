const {Router} =require('express');
const route = Router();
const {registerPublicationByPost,searchRegister} = require('../controllers/publication.controller') 


route.post("/",registerPublicationByPost);

route.get("/",searchRegister)

route.get("/:category",searchRegister)

module.exports = route;