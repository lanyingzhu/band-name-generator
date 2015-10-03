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

