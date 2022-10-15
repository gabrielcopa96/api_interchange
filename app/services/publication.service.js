const Publications = require('../models/Publication');
const Category = require('../models/Category');
// create publication
const registerPublication = async (req,res)=>{
    try {
        const createPublication = await Publications.create(req.body)
        return res.status(201).json({
            msg:"tu publicacion se creo con exito"
        })  
        } catch (error) {
            return res.status(500).json({
                msg: "surgio un error al crear tu publicacion"
            })
        }
}

//Search or select publications
/**
 * It's a function that receives a request and a response, and it returns a response with a message and
 * a list of publications.
 * @param req - request
 * @param res - response
 * @returns {
 *     "msg": "publicaciones encontradas",
 *     "registros": [
 *         {
 *             "_id": "5e8f8f8f8f8f8f8f8f8f8f8f",
 *             "id_categoria": "5e8f8f8f8f8
 */
const selectAllOrCategory = async (req,res)=>{
        let {   category    } = req.params
        let message = 'publicaciones encontradas'

        try {

        if(     category    ){
            const searchCategory = await Category.findOne(   {
                name: category
            }   )
            const filterPublicationBy = await Publications.find(    {
                id_categoria: searchCategory._id
            }   ).exec()

            if(     !filterPublicationBy      ){
                message = 'publicaciones no encontradas'
            }
            return res.status(  200 ).json( {
                msg:message,
                registros:filterPublicationBy
            }   )
        }
    
            const Registration = await Publications.find().populate('id_product')
            
            if(     !Registration.length    ){
                message = 'No existen registros';
            }
            return res.status(  200 ).json( {
                
                msg:message,
                registros: Registration,

            }   );
        

    } catch (   error   ) {
        console.error(  error   )
        const message = ' error en la consulta'
        return res.status(  500 ).json( {
            message
        }   ) 
    }
}

module.exports = {
    registerPublication,
    selectAllOrCategory
}