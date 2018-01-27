const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const session = require('express-session');
const mongoose = require('mongoose');
const server = express();
const port = process.env.PORT || 3000;
server.use(bodyParser.json());
//define your session Object 
server.use(session({
    secret: 'e5SPiqsEtjexkTj3Xqovsjzq8ovjfgVDFMfUzSmJO21dtXs4re',
    saveUninitialized: true,
    resave: false
  }));
//running the auth routes
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