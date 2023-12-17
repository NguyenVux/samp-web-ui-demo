const express = require('express');
const bodyParser = require('body-parser');
const db = require('../services/db');
const router = express.Router();
const wp = require('whirlpool-js');

router.use(bodyParser.urlencoded());
router.post('/profile', async(req,res) =>{
    const username = encodeURIComponent(req.body.uname);
    const password = wp.encSync(req.body.psw,'hex').toUpperCase();
    db.dbPool.query('SELECT * FROM accounts where Username = ? and `Key` = ?',[username,password],(error,result,fields)=>{
        if(!error)
        {
            if(!result || result?.length ===0 )
            {
                res.status(401);
                res.send(`There is no user with ${username} or wrong password`);
                return;
            }

            if(result?.length  > 1 )
            {
                res.status(500);
                res.send(`internal server error`);
                return;
            }
            const user = result[0];
            
            res.render('profile.ejs',user);
            return;
        }

    });
});

module.exports = router;