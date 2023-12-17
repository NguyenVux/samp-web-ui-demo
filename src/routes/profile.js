const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const db = require('../services/db');
const router = express.Router();
const wp = require('whirlpool-js');

router.use(bodyParser.urlencoded());
router.post('/profile', async(req,res) =>{
    console.log(req.body);
    // res.send(req.body);
    const username = encodeURIComponent(req.body.uname);
    const password = wp.encSync(req.body.psw,'hex');
    res.send({
        username,
        password
    })
    // db.dbPool.query('SELECT * FROM acounts where id = ? and key = ?',[username,password],()=>{
        
    // });
});

module.exports = router;