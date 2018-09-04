var express = require('express')
var app = express()
var router = express.Router();
app.use(express.static(__dirname + '/public2'));
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
const assert = require('assert');
const url = 'mongodb://localhost:27017';


app.listen(3002, () => console.log('Example app listening on port 3000!'))

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public2/index.html');
});

app.get('/get-HTML', function(req, res, next) {
  var resultArray = []
  MongoClient.connect(url, function(err, client) {
    var db = client.db('savedHTMLArray')
    assert.equal(null, err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc)
    }, function() {
      client.close()
      res.send({items: resultArray})
    });
  })
})

app.post('/save-HTML', function(req, res) {

  MongoClient.connect(url, function(err, client) {
    var postedHTML = {}
    postedHTML.name = req.body.name
    assert.equal(null, err);
    console.log("Connected successfully to server");
    var db = client.db('savedHTMLArray')
    db.collection('user-data').insertOne(postedHTML, function(err, result) {
      assert.equal(null, err);
      console.log('item inserted')
      client.close();
    })
  });

})
