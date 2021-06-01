const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const {dbConnect} = require('./lib/db')

const router = require('./routes/router')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './Views')


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)

dbConnect(()=>{
    app.listen(80)
    console.log('database connected')
})