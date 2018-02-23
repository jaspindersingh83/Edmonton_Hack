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
const {S3config,
    awsRegion,
    dbuser,
    dbpassword} = require('./config')




//Cors 
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credetials: true
//   };

//if using Session
// const session = require('express-session');

const server = express();
const port = process.env.PORT || 8080;

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

//Running the content routes
const contentRoutes = require('./content/routes/routes')
contentRoutes(server);

// const authRoutes = require('./auth/routes/routes')
// authRoutes(server);

///main
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds143678.mlab.com:43678/litchi`, { useMongoClient: true })
    .then(function() {
        server.listen(port,function(){
            console.log(`The databases are connected to server on ${port}`)
        });
    })
    .catch(function(err) {
        console.log('Database Connection Failed')
    })

module.exports = { server };