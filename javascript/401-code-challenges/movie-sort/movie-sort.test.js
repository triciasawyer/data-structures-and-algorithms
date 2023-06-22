'use strict';

const { sortByRecentYear, sortAlphabeticallyByTitle } = require('./index');
const { Movies } = require('./movie');

describe('Sorting Functions', () => {
  test('Sort by Recent Year - should sort movies by most recent year first', () => {
    const sortedMovies = sortByRecentYear(Movies);

    expect(sortedMovies[0].year).toBeGreaterThanOrEqual(sortedMovies[1].year);
  });


  test('Sort Alphabetically by Title - should sort movies alphabetically ignoring leading words', () => {
    const sortedMovies = sortAlphabeticallyByTitle(Movies);

    expect(sortedMovies[0].title.localeCompare(sortedMovies[1].title)).toBeLessThanOrEqual(0);
  });

});
