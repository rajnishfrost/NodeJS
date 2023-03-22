const express = require("express");
const app = express();
require("dotenv").config();
const comment = require("./routes/comment.js");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Comments Data Base Is Connected");})

app.use(express.urlencoded({extended : true}))
app.use("/add_comment" , comment)

app.listen(process.env.PORT , () => {
    console.log(`Comment API Is Listening On http://localhost:${process.env.PORT}`);
})