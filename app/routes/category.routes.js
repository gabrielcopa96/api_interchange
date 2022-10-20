const router = require('express').Router()

const controller = require('../controllers/category.controller');

const { checkJwt } = require('../middleware/session')

router
    .post('/', checkJwt, controller.createCatogories)
    .get('/', checkJwt, controller.getAllCategories)
    .get('/:id', checkJwt ,controller.getCategory)

module.exports = router