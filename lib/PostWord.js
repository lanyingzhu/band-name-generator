'use strict';

var postWord = function(object, word, objstr) {
  console.log(word);
  object[word] = true;
  return {result: 'Added the word "' + word + '" into ' + objstr};
};

module.exports = postWord;

