const Messages = require('../models/Message')
const Chats = require('../models/Chat')
const Users = require('../models/User')


const getOneMessage = async ( id , res ) => {

    try {

        const message = await Messages.findById(id)

        if(!message) {
            return res.status(404).json({
                ok: false,
                msg: 'No hay un mensaje con ese id'
            })
        }

        return res.status(200).json({
            ok: true,
            msg: 'OK, se encontro el msg',
            message
        })
    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un fallo, vuelve a intentarlo'
        })
    }
}

const getAllMessages = async ( res ) => {

    try {

        const allMessages = await Messages.find();

        if(!allMessages.length) {
            return res.status(400).json({
                ok: false,
                msg: 'No se encontro ningun mensaje'
            })
        }

        return res.status(200).json({
            ok: true,
            msg: 'Se encontraron todos los mensajes',
            data: allMessages
        })

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error, vuelve a intentarlo'
        })
    }
}

const createNewMessage = async ( body, res ) => {

    //    const data = {
    //        message: 'Hola',
    //        id_user: 'sdf32409rfsdfv',
    //        id_chat: '',
    //        id_userReceptor: 'csvf90347gf9cs'
    //    }
    // message -> creamos el mensaje -> lo asociamos a ese mensaje a un chat -> y a ese chat lo asociamos al del usuario al cual se le mando el msg

    // destructuramos los datos que vienen por body
    // para armar luego el flujo de la creacion del chat
    // y de los mensajes
    const { id_user, id_chat, id_userReceptor } = body

    try {

        // creamos variables para que luego sean modificadas segun la condicion
        // de que si llega o no un id_chat
        // por que si existe el chat simplemente almaceno un nuevo mensaje dentro
        let chat

        // genero el nuevo mensaje
        const newMessage = await Messages.create({
            message: body.message,
            id_user
        })

        // pregunto si no hay id_chat, si no hay creo el nuevo chat
        if(!id_chat.length) {


            console.log('entro a crear el chat')
            // si no hay id_chat creo el chat pasandole el id_message creado anteriormente
            chat = await Chats.create({
                id_message: newMessage._id
            })

            await Users.findByIdAndUpdate(id_userReceptor, {
                chat: chat._id
            }, { new: true })

            // almaceno el id_chat en el usuario emisor
           await Users.findByIdAndUpdate(id_user, {
                chat: chat._id
            }, { new: true })

            return res.status(201).json({
                ok: true,
                msg: 'Se genero el nuevo mensaje y fue enviado',
                newMessage
            })

        }

        // actualizamos el chat si ya existe ese chat
        if(id_chat.length) {

            console.log('entro a actualizar el chat')
            chat = await Chats.findByIdAndUpdate(id_chat, {
                $push: { id_message: newMessage._id }
            }, { new: true })

        }


        return res.status(201).json({
            ok: true,
            msg: 'Se genero el nuevo mensaje y fue enviado',
            data: {
                chat
            }
        })

    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error, vuelve a intentarlo'
        })
    }
}


module.exports = {
    getOneMessage,
    getAllMessages,
    createNewMessage
}