const comment_schema = require("../schema/comment.js");
const { MongoClient } = require("mongodb");
const database = "get_early_access_db";
const client = new MongoClient(`mongodb://localhost:27017/${database}`);

const comment = async (req, res) => {

    let result = await client.connect(() => { console.log("comment connected to get_early_access_db database"); });
    let db = result.db(database);
    let collection = db.collection("registrations");
    let data = await collection.findOne({ email: req.body.email });
    if (!data) {
        res.send("you not have early access")
    }
    else {


        if (req.body.email != undefined && req.body.comment != undefined) {
            let data = new comment_schema({ email: req.body.email, comment: req.body.comment });
            data.save();
            res.status(200).send("comment save successfully");
        }
        else {
            res.status(404).send("required field not field correctly");
        }

    }

}

module.exports = comment
