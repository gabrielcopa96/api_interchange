const router = require('express').Router()

const controller = require('../controllers/question.controller');

router
    .post('/', controller.createQuestion)

    
module.exports = router