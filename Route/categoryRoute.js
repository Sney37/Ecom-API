const{getCategory,postCategory} = require('../Controller/categoryController')

const route = require('express').Router()

route.get('/',getCategory)

route.post('/',postCategory)

module.exports = route