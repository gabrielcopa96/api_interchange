const { route } = require('./publication.routes')

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

// ROUTE CHAT
router.use('/chat', require('./chat.routes'))

// ROUTE PUBLICATION
router.use('/publication', require('./publication.routes'))

module.exports = router;