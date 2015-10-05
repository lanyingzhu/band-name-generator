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

/*function Verbs() {
  this.smile = true;
  this.cry = true;
  this.jump = true;
  this.dance = true;
}

var verb = new Verbs();

function Nouns() {
  this.apple = true;
  this.orange = true;
  this.peach = true;
  this.grape = true;
}

var noun = new Nouns();*/

/*function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}*/

var getRandomWord = require('./app/getRandomWord.js');

app.get("/", function (req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function (req, res) {
  res.json(getRandomWord.getRandomWord(adjective));
});

app.get('/verb', function (req, res) {
  res.json(getRandomWord.getRandomWord(verb));
});
app.get('/noun', function (req, res) {
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

app.post('/verbs',function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    res.json(PostWord.postWord(verb, body));
  });
});

app.post('/nouns',function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    res.json(PostWord.postWord(noun, body));
  });
});

/*
app.post('/adjective', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    console.log(body);
    adjective[body] = true;
    res.json({result: 'Added the word "' + body + '" into adjective object.'});
  });
});

app.post('/verb', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    console.log(body);
    verb[body] = true;
    res.json({result: 'Added the word "' + body + '" into verb object.'});
  });
});

app.post('/noun', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    console.log(body);
    noun[body] = true;
    res.json({result: 'Added the word "' + body + '" into noun object.'});
  });
});
*/
