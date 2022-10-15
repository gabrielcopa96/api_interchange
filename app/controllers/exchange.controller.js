const { newExchange, getAllExchanges } = require('../services/exchange.service')

const createExhange = ( req, res ) => {
    return newExchange( req.body, res )
}

const getExchanges = (req, res) => {
    return getAllExchanges( res )
}
module.exports = {
    createExhange,
    getExchanges
}