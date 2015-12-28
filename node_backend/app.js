var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var ObjectId = require('mongodb').ObjectID;
var db = require('mongoskin').db('mongodb://mean-user:mean-pw@ds037185.mongolab.com:37185/mean-bp');
var path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var server = require('http').createServer(app);
var port = 3003;

//create some test data when a post to /test is received
app.post('/test', function (req, res) {
  console.log("request body", req.body);

  db.collection('test').insert({data:req.body, date: new Date()}, function (err, result) {
    if (err) {
      res.json({error:err});      
      throw err;
    }
    if (result) {
      console.log('added test data', result);
      res.json({data:result});
    }

  });
});

app.get('/test', function (req, res) {
  db.collection('test').find().toArray(function (err, result) {
    if (err) {
      res.json({error:err});      
      throw err;
    }
    if (result) {
      res.json(result);
    }
  });
});

server.listen(port);
console.log("listening on", port);
