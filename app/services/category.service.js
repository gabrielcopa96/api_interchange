const Category = require('../models/Category');

const newCategory = async (body, res) => {

    try {

        // Creo la nueva categoria
        const category = await Category.create(body)

        // Retorno un json que contiene la nueva categoria creada
        // un msg de exito
        return res.status(201).json({
            ok: true,
            msg: 'Se creo correctamente la categoria',
            category
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error no se pudo crear la categoria'
        })
    }

}


const getCategories = async (res) => {

    try {

        const categories = await Category.find();

        if (!categories.length) {
            return res.status(404).json({
                ok: false,
                msg: 'No hay ninguna categoria actualmente',
                data: categories
            })
        }

        return res.status(200).json({
            ok: true,
            msg: 'Se trajo todas la categortias',
            categories
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error al obtener las categorias',
            error
        })
    }
}

const getOneCategory = async (id, res) => {

    try {

        const category = await Category.findById(id)

        if (!category) {
            return res.status(400).json({
                ok: false,
                msg: 'No se encontro ninguno con ese id'
            })
        }

        return res.status(200).json({
            ok: true,
            category
        })
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Hubo un error y no se pudo completar la peticion'
        })
    }
}

module.exports = {
    newCategory,
    getCategories,
    getOneCategory
}