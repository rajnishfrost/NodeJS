const { MongoClient } = require("mongodb");
const database = process.env.COMMENT_DATABASE;
const client = new MongoClient(process.env.MONGO_COMMENT_URI);

const comment_delete = async (req, res) => {
    let result = await client.connect(() => { console.log("admin connected to comment database"); });
    let db = result.db(database);
    let collection = db.collection("comments");
    let data = await collection.findOne({email : req.body.email});
    if(data && req.body.email != undefined){
        await collection.deleteOne({email : req.body.email});
        res.send("succefully deleted")
    }
    else{
        res.send("user not found")
    }
}

const comment_update = async (req, res) => {
    let result = await client.connect(() => { console.log("admin connected to comment database"); });
    let db = result.db(database);
    let collection = db.collection("comments");
    let data = await collection.findOne({email : req.body.email});
    if(data && req.body.email != undefined){
        if(req.body.comment != undefined && req.body.comment!=""){
            await collection.findOneAndUpdate({email : req.body.email} , {$set : {comment : req.body.comment}});
            res.send("succefully updated");

        }else{
            res.send("please add comment")
        }
        
    }
    else{
        res.send("user not found")
    }
}

module.exports = {comment_delete , comment_update}
