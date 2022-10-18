const router = require('express').Router();

const controller = require('../controllers/message.controller')

    router
        .get('/:id', controller.getMessage)
        .get('/', controller.getMessages)
        .post('/', controller.createMessage)

module.exports = router;