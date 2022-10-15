
const { getOneMessage, getAllMessages, createNewMessage } = require('../services/message.service')

const Messages = require('../models/Message')

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

const pruebaMessage = async (req, res) => {

    const data = req.body

    const newMessage = await Messages.create({
        message: data.message,
        id_user: data.id_user,
    })

    console.log('esta es mi nueva data', newMessage)

    res.json({
        msg: 'Se pudo',
        newMessage
    })
}

module.exports = {
    getMessage,
    getMessages,
    createMessage,
    pruebaMessage
}