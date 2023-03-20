const mongoose = require("mongoose") ;

const registration = new mongoose.Schema ({
    email : {
        type : String ,
        require : true
    }
})

const registration_schema = mongoose.model("registration" , registration);

module.exports = registration_schema;