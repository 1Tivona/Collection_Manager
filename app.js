const express = require('express');
const mustache = require('mustache-express');
const MongoClient = mongodb.MongoClient
const mongoose = require('mongoose');

const cards = require("./models/cards");

const mongoURL = 'mongodb://localhost:27017/cards';
mongoose.connect(mongoURL, {useMongoClient:true});
mongoose.Promise = require('bluebird');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.engine('mustache', mustache());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.set('layout','layout');

app.use('/static', express.static('static'));

app.get('/', function (req, res){
  res.render('index');
});

app.get('/cards/', function(req, res){
  res.render('cards');
});

app.post('/cards/', function (req, res) {

});




module.exports = app;
