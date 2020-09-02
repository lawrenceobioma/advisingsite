var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

//sql database connection
var connection = mysql.createConnection({
  host: 'tre-database2.cyfkpcgifi17.us-east-2.rds.amazonaws.com',
  user: 'rds_user',
  password: '5uP3rSecR3t',
  database: 'testDB'
});

//server connection
const app = express();

//grabs some packages from ExpressJS
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//displays login.html when the client connects to the server
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/../public/login.html'));
});

//handle the POST request - what happens when data is entered and submitted -
//the form data is sent to the server and it's compared with the stored values
//in our sampleAccts table
app.post('/auth', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    connection.query('SELECT * FROM sampleAccts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect('/home');
      } else {
        response.send('Incorrect Username and/or Password!');
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

//clients are redirected after entering their login
app.get('/home', function (request, response) {
  if (request.session.loggedin) {
    response.send('Welcome back, ' + request.session.username + '!');
  } else {
    response.send('Please login to view this page!');
  }
  response.end();
});

app.listen(8080);

