//Packages
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport')
const AWS = require('aws-sdk');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Busboy = require('busboy')
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser')

//Configs
const {S3config,awsRegion} = require('./config')


//Cors 
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credetials: true
//   };

//if using Session
// const session = require('express-session');

const server = express();
const port = process.env.PORT || 5000;

//Global Middlewares
server.use(bodyParser.json());
server.use(morgan('combined'));
server.use(cors());
server.use(busboy());
server.use(busboyBodyParser());
server.use(bodyParser.urlencoded({ extended: true }));
//Fb Middleware use 
server.use(passport.initialize());

//AWS S3 Uploads 
AWS.config.update(S3config)
AWS.config.region = awsRegion

function uploadToS3(file) {
    let s3bucket = new AWS.S3(S3config);
    s3bucket.createBucket(function () {
        var params = {
          Bucket: `${S3config.Bucket}`,
          Key: file.name,
          Body: file.data,
          ACL: 'public-read',
          ContentType: 'image/jpeg'
        };
        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log('error in callback');
            console.log(err);
          }
          console.log('success');
          console.log(data);
        });
    });
  }

  server.post('/upload', (req, res, next) => {
    // This grabs the additional parameters so in this case passing in
    // "element1" with a value.
    
    const element1 = req.body.element1;
    console.log(element1)
    const busboy = new Busboy({ headers: req.headers });
    // console.log(busboy)

    // The file upload has completed
    busboy.on('finish', function() {
      console.log('Upload finished');
      
      // Your files are stored in req.files. In this case,
      // you only have one and it's req.files.element2:
      // This returns:
      // {
      //    element2: {
      //      data: ...contents of the file...,
      //      name: 'Example.jpg',
      //      encoding: '7bit',
      //      mimetype: 'image/png',
      //      truncated: false,
      //      size: 959480
      //    }
      // }
      
      // Grabs your file object from the request.
      const file = req.files.element2;
      console.log(file);
      
      // Begins the upload to the AWS S3
      uploadToS3(file);
    });

    req.pipe(busboy);
  });
 
//Creating Log Files
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "./access.log"),
  { flags: "a" }
);

//define your session Object --Update: Using JWT now
// server.use(session({
//     secret: 'e5SPiqsEtjexkTj3Xqovsjzq8ovjfgVDFMfUzSmJO21dtXs4re',
//     saveUninitialized: true,
//     resave: false
//   }));

//Running the auth routes
const authRoutes = require('./auth/routes/routes')
authRoutes(server);

///main
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/litchi', { useMongoClient: true })
    .then(function() {
        server.listen(port,function(){
            console.log(`The databases are connected to server on ${port}`)
        });
    })
    .catch(function(err) {
        console.log('Database Connection Failed')
    })

module.exports = { server };