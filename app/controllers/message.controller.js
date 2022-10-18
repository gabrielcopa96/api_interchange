
const { getOneMessage, getAllMessages, createNewMessage } = require('../services/message.service')

const getMessage = ( req, res ) => {

    const { id } = res.query
    return getOneMessage( id ,res )

}

const getMessages = ( req, res ) => {

    return getAllMessages( res )
}

const createMessage = ( req, res ) => {

    return createNewMessage( req.body, res )
}

module.exports = {
    getMessage,
    getMessages,
    createMessage
}