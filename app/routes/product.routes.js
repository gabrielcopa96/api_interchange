const {Router} = require('express');
const router = Router();
const {registerProduct} = require('../controllers/products.controller');

router.post('/',registerProduct)

module.exports= router;