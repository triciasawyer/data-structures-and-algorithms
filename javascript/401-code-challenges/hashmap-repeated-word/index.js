'use strict';


function repeatedWord(string) {
  string = string.toLowerCase();
  // Split by non-word characters
  let words = string.split(/\W+/);

  const wordCount = {};
  let firstRepeatedWord = null;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (wordCount[word]) {
      firstRepeatedWord = word;
      break;
    } else {
      wordCount[word] = 1;
    }
  }

  return firstRepeatedWord;
}


module.exports = { repeatedWord };
