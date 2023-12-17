const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const Multer = require('multer');

const router = express.Router();
const getFields = Multer();
router.get("/",(req,res,next)=>{
    console.log(path.resolve(path.join(__dirname,"..",'public','index.html')));
    res.sendFile('index.html',{root:path.resolve(path.join(__dirname,"..",'public',))});
});

router.post("/login",getFields.none(),(req,res)=>{
    console.log(req.headers);
    console.log(req.body);
    res.status(200);
    res.end();
    
});

app.use("/",router);


app.listen("8080",() => console.log("server started"));
