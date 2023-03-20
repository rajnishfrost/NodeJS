const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT;
const registration_schema = require("./schema/get_early_access.js");
const jwt= require("jsonwebtoken");
const secretKey = "secretKey" ;


mongoose.connect(`${process.env.MONGO_URI}`).then(() => { console.log("Get Early Access Database Connected"); });

app.use(express.urlencoded({ extended: true }));

app.post("/registration", async(req, res) => {
    let regis = await registration_schema.findOne({email : req.body.email}) ;
    if(regis){
        res.send("already registered with this email");
    }
    else
    {
        const data = new registration_schema(req.body); 
        data.save(); 
        // res.send("registration done");
        jwt.sign({data} , secretKey , {expiresIn : "60s"} , (err , token)=>{
            res.json({
                token
            })
        })
    }
});

app.post("/login" , verifyToken , (req , res) => {
    jwt.verify(req.token , secretKey , (err , auth) => {
        if(err){
            res.send("Not Valid Token")
        }else{
            res.send("You In Now")
        }
    })
})

function verifyToken(req , res , next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token
        next(); 
    }else{
        res.json({
            result : "Token Not Found"
        })
    }
}

app.listen(PORT, () => {
    console.log(`Get Early Access Listening On http://localhost:${PORT}`);
})