require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 9000;
const path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
const upload = require('./multer')
const cloudinary = require('./cloudinary')
const fs = require('fs');
const verifyToken = require('./middleware')

// Serve only the static files form the dist directory

const uri = `mongodb+srv://zebehtech:${process.env.MONGOPASS}@zebehtech-awjpj.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({  extended: false }))

// parse application/json
app.use(bodyParser.json())

//local imports
//models
const Photo = require('./models/image');
//routes
const loginRouter = require('./routes/login');
const contactRouter = require('./routes/contact')
const imageRouter = require('./routes/images')

//routing work
app.use('/login', loginRouter);
app.use('/images', imageRouter);
app.use('/contact', contactRouter);

//implementing modules
app.use(cors({credentials: true})); 
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//static files
app.use('/upload-images', express.static('uploads'));
app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({ error: err.message });
});

app.use('/upload-images', verifyToken, upload.array('image'), async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, 'Images');
  if (req.method === 'POST') {
    const urls = []
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    }

    for (let i = 0; i < urls.length; i++) {
      var url = urls[i].url;
      var id = urls[i].id;
      const category = req.body.category;
      var photo = new Photo({ url, id, category });
      try {
        photo.save()
          .then(function (photo) { });
      } catch (error) { console.log(error.message) }
    }
    res.status(200).json({
      message: 'images uploaded successfully'
    })
  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`
    })
  }
})




app.use(express.static(__dirname + '/dist/zebehtech'));

app.get('/*', function(req,res) {    
res.sendFile(path.join(__dirname+'/dist/zebehtech/index.html'));
});

app.listen(port,()=>console.log('running'));