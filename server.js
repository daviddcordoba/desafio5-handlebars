const express = require('express')
const app = express()
const routerProduct = require('./src/routes/route')
const { engine } = require('express-handlebars')


app.engine('handlebars', engine())
app.set('view engine','handlebars')
app.set('views', './views')


/*  Middlewares    */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos',routerProduct)
app.use(express.static('public'))




/* RUNNING SERVER    */
const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{console.log('Server Runing')});
server.on('error',error=>console.log(`Error ${error}`));
