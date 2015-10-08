var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/app/"));
app.listen(port, function () {
  console.log('server started on port ' + port);
});

var Adjective = require('./app/adjective.js');
var adjective = new Adjective.Adjective();

var Verb = require('./app/verb.js');
var verb = new Verb.Verb();

var Noun = require('./app/noun.js');
var noun = new Noun.Noun();

var getRandomWord = require('./app/getRandomWord.js');

/*jshint validthis:true */
app.get("/", function (req, res) {
  console.log(req.method);
  res.sendFile('index.html');
});

app.get('/adjective', function (req, res) {
  console.log(req.method);
  res.json(getRandomWord.getRandomWord(adjective));
});

app.get('/verb', function (req, res) {
  console.log(req.method);
  res.json(getRandomWord.getRandomWord(verb));
});

app.get('/noun', function (req, res) {
  console.log(req.method);
  res.json(getRandomWord.getRandomWord(noun));
});

var PostWord = require('./app/PostWord.js');

app.post('/adjective', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    res.json(PostWord.postWord(adjective, body));
  });
});

app.post('/verbs', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    res.json(PostWord.postWord(verb, body));
  });
});

app.post('/nouns', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    res.json(PostWord.postWord(noun, body));
  });
});

