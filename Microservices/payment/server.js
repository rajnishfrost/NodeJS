const express = require("express");
const app = express();
const PORT = 5002;

app.get("/payment" , (req , res) => {
    let response = {
        data : {
            item : [
                {
                    id : 1 ,
                    name : "camera" ,
                    cost : 20
                },
                {
                    id : 2 ,
                    name : "monitor" ,
                    cost : 20
                },
                {
                    id : 3 ,
                    name : "bottle" ,
                    cost : 20
                }
            ]
        }
    }

    return res.status(200).json(response);
})

app.listen(PORT , () => {
    console.log(`Payment Service Is Listening At http://localhost:${PORT}`);
})

