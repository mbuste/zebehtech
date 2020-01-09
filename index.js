require('dotenv').config()
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 9000;
const server = http.createServer(app);
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/zebehtech'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/zebehtech/index.html'));
});

server.listen(port,()=>console.log('running'));