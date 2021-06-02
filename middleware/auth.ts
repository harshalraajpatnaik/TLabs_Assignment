import {Request, Response, NextFunction} from 'express'

export const auth = (req:Request, res:Response , next:NextFunction)=>{

    if(!req.isLoggedIn){
        res.redirect('/login')
        return
    }
    
    next()
}

export const restAuth = (req:Request, res:Response , next:NextFunction)=>{
    
    if(!req.isLoggedIn){
        res.status(403).json('Not Authorized')
        return
    }
    
    next()
}