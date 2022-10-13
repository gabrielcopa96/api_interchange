const router = require('express').Router()

// ROUTE USERS
router.use("/user",require('./routeUser'))

// ROUTE CATEGORY
router.use('/category', require('./category.routes'))

// ROUTE QUESTION
router.use('/question', require('./question.routes'))

// ROUTE CHAT
router.use('/chat', require('./chat.routes'))

module.exports = router;