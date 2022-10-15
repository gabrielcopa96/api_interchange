const router = require('express').Router()

const controller = require('../controllers/exchange.controller');

 router
    .get('/', controller.getExchanges)
    .post('/', controller.createExhange)

module.exports = router