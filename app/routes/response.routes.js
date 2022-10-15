const {Router} = require('express');
const router = Router();
const {responseRegister} = require('../controllers/response.route')


    router.post("/", responseRegister)

module.exports = router;




