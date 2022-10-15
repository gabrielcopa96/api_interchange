const { getAllQuestionxResponse, getOneQuestionXResponse } = require('../services/questionxresponse.service')

const getQuestionsXResponses = (req, res) => {

    return getAllQuestionxResponse( res )
}

const getQuestionResponse = (req, res) => {

    const { id } = req.query
    return getOneQuestionXResponse(id, res)
}

const getQuestionXResponseForPublication = (req, res) => {

}

module.exports = {
    getQuestionsXResponses,
    getQuestionResponse
}