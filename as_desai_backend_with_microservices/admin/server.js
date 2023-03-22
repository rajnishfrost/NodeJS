const express = require("express");
const app = express();
require("dotenv").config();
const comment = require("./routes/comment.js");
const {valid_email , validator} = require("./middlewares/comment.js");

app.use(express.urlencoded({ extended: true }));
app.use("/comment" , valid_email , validator  , comment);


app.listen(process.env.PORT, () => {
    console.log(`Admin Is listening on http://localhost:${process.env.PORT}`);
})

