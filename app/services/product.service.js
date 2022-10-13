const Products = require('../models/Product')
const registerProductService = async ( req,res )=>{
   /* The above code is creating a product. */
    try {
        const productCreate = await Products.create(req.body)
        res.status(201).json({
            msg:"El producto fue creado con exito",
            producto:productCreate,
        })
    } catch (error) {
        const {message} = error.errors.name
        res.status(500).json({
            msg:"al momento de crear un producto, surgio un error",
            error: message
        })
    }
} 
module.exports = {
    registerProductService
}