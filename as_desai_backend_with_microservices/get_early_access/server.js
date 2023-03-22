const express = require("express");
const app = express();
const app2 = express();
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT;
const registration = require("./routes/get_early_access/registration.js");
const del = require("./routes/get_early_access/delete.js");
const cors = require("cors")


mongoose.connect(`${process.env.MONGO_URI}`).then(() => { console.log("Get Early Access Database Connected"); });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app2.use(express.urlencoded({ extended: true }));
app2.use("/register" , registration);
app.use("/delete" , del);

function verifyToken(req , res , next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token
        next(); 
    }else{
        res.status(404).send("Token Not Found")
    }
}

app.listen(PORT, () => {
    console.log(`Get Early Access Listening On http://localhost:${PORT}`);
})

app2.listen(4005, () => {
    console.log(`Get Early Access resigtration On http://localhost:${4005}`);
})