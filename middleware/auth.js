exports.auth = (req, res , next)=>{

    if(!req.isLoggedIn){
        res.redirect('/login')
        return
    }
    
    next()
}

exports.restAuth = (req, res, next)=>{
    
    if(!req.isLoggedIn){
        res.status(403).json('Not Authorized')
        return
    }
    
    next()
}