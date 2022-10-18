const router = require('express').Router()

const controller = require('../controllers/chat.controller');

 router
    .get('/:id', controller.getChatById)

module.exports = router