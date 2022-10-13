const {registerProductService} = require('../services/product.service')

const registerProduct = (req,res)=>{
    registerProductService(req,res)
}
module.exports = {
    registerProduct
}