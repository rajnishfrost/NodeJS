const gateway = require("fast-gateway");
require("dotenv").config();
const PORT = process.env.PORT;

const server = gateway({
    routes : [
        {
            prefix : "get_early_access" ,
            target : "http://localhost:4001"
        }
    ]
});

server.get("/gateway" , (req , res) => {
    res.send("yes gateway is responding")
});

server.start(PORT).then( server => {
    console.log(`API Gateway Is Running localhost:${PORT}`);
})