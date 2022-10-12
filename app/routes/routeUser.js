const express = require("express");
const route = express.Router();
const {registerUser} = require('../controllers/user.controller');




route.post("/",registerUser);



module.exports = route;