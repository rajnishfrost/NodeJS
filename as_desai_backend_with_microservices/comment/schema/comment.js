const mongoose = require("mongoose");

const comment = new mongoose.Schema({
    email : {
        type : String ,
        require : true
    } ,
    comment : {
        type : String , 
        require : true
    }
})

const comment_schema = mongoose.model("comment" , comment)

module.exports = comment_schema;