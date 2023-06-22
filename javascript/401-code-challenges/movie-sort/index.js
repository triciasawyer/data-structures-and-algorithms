'use strict';

const { Movies } = require('./movie');

function sortByRecentYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortAlphabeticallyByTitle(movies) {
  return movies.sort((a, b) => {
    const getTitleWithoutLeadingWords = (title) => {
      const leadingWords = ['A', 'An', 'The'];
      const words = title.split(' ');
      if (leadingWords.includes(words[0])) {
        return words.slice(1).join(' ');
      }
      return title;
    };

    const titleA = getTitleWithoutLeadingWords(a.title);
    const titleB = getTitleWithoutLeadingWords(b.title);

    return titleA.localeCompare(titleB);
  });
}

module.exports = {sortByRecentYear, sortAlphabeticallyByTitle};
