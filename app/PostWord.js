function postWord(object, word) {
  console.log(word);
  object[word] = true;
  return {result: 'Added the word "' + word + '" into ' + object.constructor.name};
}

exports.postWord = postWord;

