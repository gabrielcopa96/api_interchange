const Exchanges = require('../models/Exchange')
const Publications = require('../models/Publication')
const User = require('../models/User')

const newExchange = async (body, res) => {
    
    // const data = {
    //     id_user: 'sdfsdfsdf235rcsdff',
    //     id_product: 'sdfv349udf0vdfsg',
    //     id_publication: ['sfsdfsdff290r7fy8sdf'],
    //     status: 'Pendiente',
    // }

    try {
        
        const exchange = await Exchanges.create(body)
        
        console.log('mi nuevo intercambio', exchange)

        const { status } = exchange

        const publication = await Publications.findById(body.id_publication)
        
        const { id_user } = publication

        await User.findByIdAndUpdate(id_user, {
            $push: { exchange: exchange._id }
        }, { new: true })

        if(status) {
            return res.status(201).json({
                ok: true,
                msg: 'Se creo correctamente el intercambio',
                exchange
            })
        }

        return res.status(400).json({
            ok: false,
            msg: 'No se pudo crear'
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error, vuelve a intentarlo'
        })
    }

}

const getAllExchanges = async (res) => {

    try {
        
        const exchanges = await Exchanges.find()
            .populate('id_user', 'username')
            .populate({ path: 'id_publication', populate: { path: 'id_product', select: 'name description'}}) 
            .populate({ path: 'id_publication', populate: { path: 'id_product', populate: { path: 'id_user', select: 'username'}}})
            
        if(exchanges.length) {
            return res.status(200).json({
                ok: true,
                msg: 'Se obtuvo todos los exchanges',
                exchanges
            })
        }

        return res.status(400).json({
            ok: false,
            msg: 'No se encontraron exchanges, todavia no hay exchange en la base de datos'
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error, vuelve a intentarlo'
        })
    }
}

module.exports = {
    newExchange,
    getAllExchanges
}