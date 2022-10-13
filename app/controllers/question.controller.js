const { createNewQuestion } = require('../services/question.service') 

const createQuestion = (req, res) => {
    
    return createNewQuestion(req.body, res)
}


module.exports = {
    createQuestion
}