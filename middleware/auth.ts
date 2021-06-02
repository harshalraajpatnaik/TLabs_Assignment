import {Request, Response, NextFunction} from 'express'

export const auth = (req:Request, res:Response , next:NextFunction)=>{

    if(!res.locals.isLoggedIn){
        res.redirect('/login')
        return
    }
    
    next()
}

export const restAuth = (req:Request, res:Response , next:NextFunction)=>{
    
    if(!res.locals.isLoggedIn){
        res.status(403).json('Not Authorized')
        return
    }
    
    next()
}