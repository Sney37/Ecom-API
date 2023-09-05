const{getProduct,postProduct} = require('../Controller/productController')

const route = require('express').Router()

route.get('/',getProduct)

route.post('/',postProduct)

module.exports = route