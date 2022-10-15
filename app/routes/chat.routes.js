const router = require('express').Router()

const controller = require('../controllers/chat.controller');

 router
    .get('/:id', controller.getChatById)
//     .post('/', controller.createCatogories)

module.exports = router