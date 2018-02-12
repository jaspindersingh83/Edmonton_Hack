const bodyParser = require('body-parser');
//Morgan and dependencies
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport')

//Express
const express = require('express');
const cors = require('cors');

//Cors 

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credetials: true
//   };

//if using Session
// const session = require('express-session');

//Mongoose
const mongoose = require('mongoose');


const server = express();
const port = process.env.PORT || 5000;

//Global Middlewares
server.use(bodyParser.json());
server.use(morgan('combined'));
server.use(cors());
//Fb Middleware use 
server.use(passport.initialize());

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