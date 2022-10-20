const router = require('express').Router()

const controller = require('../controllers/question.controller');
const { checkJwt } = require('../middleware/session')

router
    .post('/', checkJwt, controller.createQuestion)

    
module.exports = router