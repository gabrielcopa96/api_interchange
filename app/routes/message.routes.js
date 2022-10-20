const router = require('express').Router();

const controller = require('../controllers/message.controller')
const { checkJwt } = require('../middleware/session')

    router
        .get('/:id', checkJwt, controller.getMessage)
        .get('/', checkJwt, controller.getMessages)
        .post('/', checkJwt, controller.createMessage)

module.exports = router;