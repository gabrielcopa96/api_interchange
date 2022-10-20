const {Router} = require('express');
const router = Router();
const {registerProduct} = require('../controllers/products.controller');
const { checkJwt } = require('../middleware/session')

router.post('/', checkJwt, registerProduct)

module.exports= router;