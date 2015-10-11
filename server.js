'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app/'));

var Adjective = require('./lib/adjective.js');
var adjective = new Adjective();

var Verb = require('./lib/verb.js');
var verb = new Verb();

var Noun = require('./lib/noun.js');
var noun = new Noun();

var getRandomWord = require('./lib/getRandomWord.js');

//response favorite adjective
var favAdjectives = {};
app.get('/adjective', function(req, res) {
  console.log(req.method);
  var getword = getRandomWord(adjective);
  addWord(favAdjectives, getword.word);
  var favWord = favoriteWord(favAdjectives);
  getword.favadj = favWord;
  res.json(getword);
});

//response favorite verb
var favVerbs = {};
app.get('/verb', function(req, res) {
  console.log(req.method);
  var getword = getRandomWord(verb);
  addWord(favVerbs, getword.word);
  var favWord = favoriteWord(favVerbs);
  getword.favverb = favWord;
  res.json(getword);
});

//response favortite noun
var favNouns = {};
app.get('/noun', function(req, res) {
  console.log(req.method);
  var getword = getRandomWord(noun);
  addWord(favNouns, getword.word);
  var favWord = favoriteWord(favNouns);
  getword.favnoun = favWord;
  res.json(getword);
});

var postWord = require('./lib/PostWord.js');

app.post('/adjective', function(req, res) {
  var body = '';
  req.on('data', function(data) {
    body += data;
    res.json(postWord(adjective, body, 'adjective'));
  });
});

app.post('/verb', function(req, res) {
  var body = '';
  req.on('data', function(data) {
    body += data;
    res.json(postWord(verb, body, 'verb'));
  });
});

app.post('/noun', function(req, res) {
  var body = '';
  req.on('data', function(data) {
    body += data;
    res.json(postWord(noun, body, 'noun'));
  });
});

function addWord(object, word) {
  // Count favorite word
  if (object.hasOwnProperty(word)) {
    object[word] += 1;
  } else {
    object[word] = 1;
  }
}

function favoriteWord(object) {
  //Compare favorite word counter to find a favorite word
  var favoriteCounter = 0;
  var favoriteName = '';
  for (var prop in object) {
    if (object[prop] > favoriteCounter) {
      favoriteCounter = object[prop];
      favoriteName = prop;
    }
  }

  return favoriteName;
}

app.get('/', function(req, res) {
  console.log(req.method);
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
