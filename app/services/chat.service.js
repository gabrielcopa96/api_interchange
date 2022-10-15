const Chats = require('../models/Chat')


const getOneChat = async ( id, res ) => {

    try {

        const chat = await Chats.findById( id )
        .populate({ path: 'id_message', populate: { path: 'id_user', select: 'username'}})


        res.status(200).json({
            ok: true,
            msg: 'Ok, este es tu chat',
            chat
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error, no se encontro el chat que estabas buscando o no existe'
        })
    }
}


module.exports = {
    getOneChat
}