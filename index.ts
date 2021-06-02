import path from 'path'

import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'   
import jwt, { decode } from 'jsonwebtoken'


import {dbConnect} from './lib/db'

import router from './routes/router'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './Views')

app.use(cookieParser())

app.use((req:Request, res:Response, next:NextFunction)=>{
    const {token} = req.cookies

    const decodedToken = jwt.decode(token)
    
    res.locals.isLoggedIn = decodedToken?true:false
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