require('dotenv').config()
const express =require('express')
const port = process.env.PORT || 7000;
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/zebehtech'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/zebehtech/index.html'));
});

app.listen(port,()=>console.log('running'));