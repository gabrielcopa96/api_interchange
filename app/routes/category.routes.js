const router = require('express').Router()

const controller = require('../controllers/category.controller');

router
    .post('/', controller.createCatogories)
    .get('/', controller.getAllCategories)
    .get('/:id', controller.getCategory)

module.exports = router