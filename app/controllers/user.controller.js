const userRegister = require('../services/user.service')
module.exports = {

    /* This is a function that is being exported to be used in another file. */
    registerUser: (req, res) => {
        userRegister(req, res)
    }
}