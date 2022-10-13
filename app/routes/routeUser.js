
const router = require('express').Router();
const { registerUser } = require('../controllers/user.controller');


router.post("/", registerUser);



module.exports = router;