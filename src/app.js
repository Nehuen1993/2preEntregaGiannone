const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products.routes')
const cartRoutes = require('./routes/cart.routes')
const { productModel } = require('./schemas/schemas')
const mongoosePaginate = require('mongoose-paginate-v2')

const app = express()
const port = 8080


app.listen(port, () => {
    console.log(`escuchando el puerto:${port}`)
})

app.use (express.json())

const environment = async () => {
    
await mongoose.connect("mongodb+srv://nehuengiannone:Lz7n3cS0vO7ulfvk@cluster0.s1deur4.mongodb.net/?retryWrites=true&w=majority")
.then (() => {
    console.log("conexion exitosa a mongodb")
})
.catch(error => {
    console.error ("error de conexion", error)
})

let products = await productModel.paginate ({categoria: "cat4"},{limit: 2, page:1})
console.log (products)

}
environment()

app.use ("/api/products", productRoutes)
app.use ("/api/cart", cartRoutes)