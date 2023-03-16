const express = require("express");
const app = express();
const PORT = 5001;

app.get("/order" , (req , res) => {
    let response = {
        data : {
            item : [
                {
                    id : 1 ,
                    name : "camera"
                },
                {
                    id : 2 ,
                    name : "monitor"
                },
                {
                    id : 3 ,
                    name : "bottle"
                }
            ]
        }
    }

    return res.status(200).json(response);
})


app.listen(PORT , () => {
    console.log(`Order Service Is Listening At http://localhost:${PORT}`);
})

