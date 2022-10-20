const router = require('express').Router()

const controller = require('../controllers/questionxresponse.controller');
const { checkJwt } = require('../middleware/session')

 router
     .get('/', checkJwt, controller.getQuestionsXResponses)
     .get('/:id', checkJwt, controller.getQuestionResponse)

module.exports = router