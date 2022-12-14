const Question = require('../models/Question');
const QuestionXResponse = require('../models/QuestioXResponse');
const Publication = require('../models/Publication');

const createNewQuestion = async (body, res) => {

    // const question = {
    //     message: 'Hola queria preguntar cuantos anios tiene de uso',
    //     id_user: '23490vc2ui43f0dsf',
    //     id_publicacion: 'df324tfdg3gdfg'
    // }

    const { message, id_user, id_publication } = body

    try {
        // Creo mi nueva question para luego obtener el id de este nuevo registro
        const question = await Question.create({
            message,
            id_user
        })


        // creo mi question x response mandandole solamente el id_question
        const newquestionxresponse = await QuestionXResponse.create({
            id_question: question._id
        })

        // actualizo la publication
        const publicat = await Publication.findByIdAndUpdate(
          id_publication,
          {
            $push: { id_questionxresponse: newquestionxresponse._id },
          },
          { new: true }
        );
        

        console.log(publicat);

        return res.status(201).json({
            ok: true,
            msg: 'Se creo correctamente',
            newquestionxresponse,
            publicat
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error vuelva a intentarlo'
        })
    }
}

module.exports = {
    createNewQuestion
}