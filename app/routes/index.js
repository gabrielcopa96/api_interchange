const router = require('express').Router()

// ROUTE USERS
router.use("/user",require('./routeUser'))

// ROUTE CATEGORY
router.use('/category', require('./category.routes'))

//ROUTE RESPONSE
router.use('/response', require('./response.routes'))



module.exports = router;