const { newCategory, getCategories, getOneCategory } = require('../services/category.service');

const createCatogories = (req, res) => {
    // Llamo a mi servicio para crear mi nueva categoria y recibe como parametros
    // el body y el response
    return newCategory(req.body, res)
}

const getAllCategories = (req, res) => {
    // Llamo al servicio para obtener todas la categorias y recibe como parametros
    // solo el response
    return getCategories(res)
}

const getCategory = (req, res) => {
    // destructuro de req.query para extraer el id
    const { id } = req.params
    // Llamo al servicio para obtener solo 1 registro de mi coleccion Categoria
    // Y le paso por parametro el id y el response
    return getOneCategory(id, res)
}

// Exporto un objeto que contiene todas mis funciones
module.exports = {
    createCatogories,
    getAllCategories,
    getCategory
}