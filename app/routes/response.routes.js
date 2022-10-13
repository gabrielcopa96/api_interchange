const {Router} = require('express');
const router = Router();
const {responseRegister} = require('../controllers/response.route')


    router.get("/", responseRegister)

module.exports = router;




