const router = require('express').Router()

const controller = require('../controllers/questionxresponse.controller');

 router
     .get('/', controller.getQuestionsXResponses)
     .get('/:id', controller.getQuestionResponse)

module.exports = router