const router = require('express').Router()

const rutaUser = require('./routeUser')


router.use("/user", rutaUser)


module.exports = router;