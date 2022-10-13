const QuestionXResponse = require('../models/QuestioXResponse')

const getAllQuestionxResponse = async (res) => {

    try {
        const questionxresponse = await QuestionXResponse.find();

        if(questionxresponse.length) {
            return res.status(500).json({
                ok: true,
                msg: 'OK, te devolvemos todas las questionsXresponse que existen',
                data: questionxresponse
            })
        }
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un fallo, vuelve a intentarlo'
        })
    }
}

const getOneQuestionXResponse = async (id, res) => {

    try {

        const oneQuestionXResponse = await QuestionXResponse.findById(id)

        if(oneQuestionXResponse) {
            return res.status(200).json({
                ok: true,
                msg: 'Ok, se encontraron los datos con exito',
                data: oneQuestionXResponse
            })
        }

        return res.status(400).json({
            ok: false,
            msg: 'No se encontro la questionxresponse'
        })


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un fallo, vuelve a intentarlo'
        })
    }

}

module.exports = {
    getAllQuestionxResponse,
    getOneQuestionXResponse
}