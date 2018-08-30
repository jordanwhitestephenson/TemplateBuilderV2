var express = require('express')
var app = express()
var router = express.Router();
app.use(express.static(__dirname + '/public2'));
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var savedHTMLArray = []
app.listen(3002, () => console.log('Example app listening on port 3000!'))

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public2/index.html');
});

app.post('/saveHTML', function(req, res) {
    var postedHTML = {}
    postedHTML.name = req.body.name
    savedHTMLArray.push(postedHTML)
    return res.send(postedHTML)

})
app.get('/saveHTML', function(req, res) {
    res.send(savedHTMLArray);
})


// db.serialize(function () {
//   db.run('CREATE TABLE SavedModules (info TEXT)')
//   var moduleDB = db.prepare('INSERT INTO SavedModules VALUES (?)')
//
//   for (var i = 0; i < 10; i++) {
//     moduleDB.run('Module ' + i)
//   }
//
//   moduleDB.finalize()
//
//   db.each('SELECT rowid AS id, info FROM SavedModules', function (err, row) {
//     console.log(row.id + ': ' + row.info)
//   })
// })
// db.close()
