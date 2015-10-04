var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/app/"));
app.listen(port, function () {
  console.log('server started on port ' + port);
});

function Adjective() {
  this.sleepy = true;
  this.happy = true;
  this.sad = true;
  this.nice = true;
}

var adjective = new Adjective();

function Verbs() {
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

var noun = new Nouns();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

app.get("/", function (req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function (req, res) {
  res.json(getRandomWord(verb));
});
app.get('/noun', function (req, res) {
  res.json(getRandomWord(noun));
});

app.post('/adjective', function (req, res) {
  var body = "";
  req.on('data', function (data) {
    body += data;
    console.log(body);
    adjective[body] = true;
    res.json({result: 'Added the word "' + body + '" into adjective object.'});
  });
});
