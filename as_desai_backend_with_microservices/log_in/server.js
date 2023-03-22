const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const database = "get_early_access_db";
const client = new MongoClient(`mongodb://localhost:27017/${database}`);
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";


app.use(express.urlencoded({extended : true}));
app.post("/user", async (req, res) => {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("registrations");
    let data = await collection.findOne({ email: req.body.email });
    if (!data) {
        res.send("you not have early access")
    }
    else {

       
        jwt.sign({data} , secretKey , {expiresIn : "300s"} , (err    , token)=>{
            if(!err){
                res.json({
                    token : token ,
                    message : "you are logged in now"
                })
            }else{
                res.send("error found")
            }
        })

    }
});



app.listen(4004, () => {
    console.log(`log in is listening on http://localhost:${4000}`);
})
