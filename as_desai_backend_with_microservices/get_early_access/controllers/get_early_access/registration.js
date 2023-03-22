const registration_schema = require("../../schema/get_early_access.js");
const jwt= require("jsonwebtoken");
const secretKey = "secretKey" ;

const registration = async(req , res) => {
    let regis = await registration_schema.findOne({email : req.body.email}) ;
    if(regis){
        res.send("already registered with this email");
    }
    else
    {
        const data = new registration_schema(req.body); 
        data.save(); 
        // jwt.sign({data} , secretKey , {expiresIn : "300s"} , (err , token)=>{
        //     res.json({
        //         token
        //     })
        // })
    }
}

module.exports = registration