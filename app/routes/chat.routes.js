const router = require('express').Router()

const controller = require('../controllers/chat.controller');
const { checkJwt } = require('../middleware/session')

 router
    .get('/:id', checkJwt, controller.getChatById)

module.exports = router