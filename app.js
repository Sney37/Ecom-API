//init
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./Route/productRoute')
const categoryRoute = require('./Route/categoryRoute')
require('dotenv/config')

//decl
const app = express()

//middleware
app.use(express.json())

//default route
app.get('/',(req,res)=>{
    console.log('running on 5000 port');
})

//main  route
app.use('/api/product',productRoute)
app.use('/api/category',categoryRoute)

app.listen(process.env.PORT,()=>{
    console.log('running on 5000 port');
})

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()