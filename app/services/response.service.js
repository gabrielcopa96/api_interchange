const Response = require('../models/Response');
const questionXresponse = require('../models/QuestioXResponse');

const newResponse = async( body, res ) => {
    const {message,id_user,id_questionXresponse} = body
    try {
        const createRegisterResponse = await Response.create({
            message,
            id_user
        });
        await questionXresponse.findByIdAndUpdate(id_questionXresponse,{
            id_response: createRegisterResponse._id
        })
        res.status(200).json({
            msg:"respuesta enviada con exito"
        })
    } catch (error) {
        res.status(500).json({
            msg:"surgio un error al enviar el mensaje"
        })
    }
    
}

module.exports = {
    newResponse
}