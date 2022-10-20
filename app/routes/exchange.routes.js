const router = require('express').Router()

const controller = require('../controllers/exchange.controller');
const { checkJwt } = require('../middleware/session')

 router
    .get('/', checkJwt, controller.getExchanges)
    .post('/', checkJwt, controller.createExhange)

module.exports = router