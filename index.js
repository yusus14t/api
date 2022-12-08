const express = require("express")
const app = express();
const cors =require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("I am live")
});

app.get("/data",(req,res)=>{
    res.send(data)
})

app.listen(port,
    ()=>{console.log('server is running')}
    );

