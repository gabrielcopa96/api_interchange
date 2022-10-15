const { getOneChat } = require('../services/chat.service')

const getChatById = ( req, res ) => {

    const { id } = req.params
    return getOneChat( id, res )

}

module.exports = {
    getChatById
}