const express = require('express');
const ejs = require('ejs');
const router = express.Router();

router.get('/', async(req,res) =>{
    const result = await ejs.renderFile('template/index.ejs');
    res.send(result);

});

module.exports = router;