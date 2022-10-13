const router = require('express').Router()

// ROUTE USERS
router.use("/user",require('./routeUser'))

// ROUTE CATEGORY
router.use('/category', require('./category.routes'))

//ROUTE PRODUCTS
router.use('/product', require('./product.routes'))

//ROUTE RESPONSE
router.use('/response', require('./response.routes'))

// ROUTE QUESTION
router.use('/question', require('./question.routes'))

module.exports = router;