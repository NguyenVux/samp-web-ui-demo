const express = require('express');
const root = require('./routes/root');
const profile = require('./routes/profile');

const app = express();
const port = 8080;


app.use(express.static('public'));
app.use((res,req,next) => {
    res.headers['cache-control'] = 'no-store';
    next();
});
app.use(root);
app.use(profile);

app.listen(port,()=>{
    console.log(`Listing port ${port}`);
})
