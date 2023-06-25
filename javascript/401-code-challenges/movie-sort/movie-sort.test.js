'use strict';

const { sortByRecentYear, sortAlphabeticallyByTitle } = require('./index');
const { Movies } = require('./movie');

describe('Sorting Functions', () => {
  test('Can sort movies by most recent year first', () => {
    const sortedMovies = sortByRecentYear(Movies);

    expect(sortedMovies[0].year).toBeGreaterThanOrEqual(sortedMovies[1].year);
  });


  test('Can sort movies alphabetically by title', () => {
    const sortedMovies = sortAlphabeticallyByTitle(Movies);

    expect(sortedMovies[0].title.localeCompare(sortedMovies[1].title)).toBeLessThanOrEqual(0);
  });

});
