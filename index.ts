import path from 'path'

import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'   
import jwt from 'jsonwebtoken'


import {dbConnect} from './lib/db'

import router from './routes/router'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './Views')

app.use(cookieParser())

app.use((req, res, next)=>{
    const {token} = req.cookies
    const decodedToken = jwt.decode(token, {key: 'mySecret'})
    
    req.isLoggedIn = decodedToken&&decodedToken.username=='admin'?true:false
    res.locals.isLoggedIn = decodedToken&&decodedToken.username=='admin'?true:false
    next()
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)
// Version 2 ready
dbConnect(()=>{
    app.listen(80)
    console.log('database connected')
})