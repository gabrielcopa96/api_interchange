const {Router} = require('express');
const router = Router();
const { responseRegister } = require('../controllers/response.route')
const { checkJwt } = require('../middleware/session')


    router
        .post("/", checkJwt, responseRegister)

module.exports = router;