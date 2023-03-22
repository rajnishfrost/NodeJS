const gateway = require("fast-gateway");
require("dotenv").config();
const PORT = process.env.PORT;
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";

const checkAuth = (req , res , next)=>{
    if(req.headers.token && req.headers.token!=""){
        next();
    }
    else{
        res.setHeader("Content-type" , "application/json");
        res.statusCode = 401 ;
        res.end(JSON.stringify({status : 401 , message : "Authentication Failed"}))
    }
}

const verifyToken = (req , res , next) => {
    jwt.verify(req.token , secretKey , (err , auth) => {
        if(err){
            res.send("Not Valid Token")
        }else{
            next()
        }
    })
}


function token(req , res , next){
    const bearerHeader = req.headers['authorization'];
    console.log(typeof bearerHeader);
    if(bearerHeader != undefined){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token
        next(); 
    }else{
        res.send("token not found")
    }
}


const server = gateway({
    routes : [
        {
            prefix : "get_early_access" ,
            target : "http://localhost:4001",
            middlewares : [token , verifyToken] ,
        } ,
        {
            prefix : "comment" ,
            target : "http://localhost:4002" ,
            middlewares : [token , verifyToken] ,
        } ,
        {
            prefix : "admin" ,
            target : "http://localhost:4003" ,
            middlewares : [token , verifyToken] ,
        } ,
        {
            prefix : "log_in" ,
            target : "http://localhost:4004" 
        } ,
        {
            prefix : "registration" ,
            target : "http://localhost:4005" 
        }
    ]
});

server.get("/gateway" , (req , res) => {
    res.send("yes gateway is responding")
});

server.start(PORT).then( server => {
    console.log(`API Gateway Is Running localhost:${PORT}`);
})