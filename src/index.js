const express = require('express');

const app = express();

const router = express.Router();

router.get("/login",(req,res,next)=>{
    res.send("hello world");
    next();
});

app.use("/",router);


app.listen("8080",() => console.log("server started"));
