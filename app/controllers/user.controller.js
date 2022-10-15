const userRegister = require('../services/user.service')
const Users = require('../models/User')

module.exports = {

    /* This is a function that is being exported to be used in another file. */
    registerUser: (req, res) => {
        userRegister(req, res)
    },
}