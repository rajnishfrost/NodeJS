const registration_schema = require("../../schema/get_early_access.js");

const del = async (req, res) => {

    let regis = await registration_schema.findOne({ email: req.body.email });
    if (regis) {
        regis.deleteOne();
        res.status(200).send("deleted succesfully")
    }
    else{
                res.send("error while deleting")
    }

    
}


module.exports = del