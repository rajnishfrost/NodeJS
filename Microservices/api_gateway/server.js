const gateway = require("fast-gateway");
const PORT = 9001;

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

const server = gateway({
    routes:[
        {
            prefix : "/odr" ,
            target : "http://localhost:5001" ,
            middlewares : [checkAuth] ,
            hooks : {

            }
        } ,
        {
            prefix : "/pyt" ,
            target : "http://localhost:5002" ,
            hooks : {

            }
        }
    ]
});

server.get("/main" , (req , res) => {
    res.send("yes gateway is responding")
});

server.start(PORT).then( server => {
    console.log(`API Gateway Is Running localhost:${PORT}`);
})