const { leftJoin } = require('./index');


describe('Hashmap leftJoin tests', () => {
  test('if the Hashmaps are empty', () => {
    const synonyms = {};
    const antonyms = {};
    const result = leftJoin(synonyms, antonyms);

    expect(result === null).toBe(true);
  });



  test('if the leftJoin method works correctly with the 2 hashmaps, synonyms and antonyms', () => {
    const synonyms = {
      happy: 'joyful',
      sad: 'unhappy',
      good: 'great'
    };

    const antonyms = {
      happy: 'unhappy',
      sad: 'happy',
      good: 'bad'
    };

    const expectedResult = {
      happy: ['joyful', 'unhappy'],
      sad: ['unhappy', 'happy'],
      good: ['great', 'bad']
    };

    const result = leftJoin(synonyms, antonyms);

    expect(JSON.stringify(result) === JSON.stringify(expectedResult));  // Output: true
  });


  test('if there is missing antonyms', () => {
    const synonyms = {
      hot: 'scorching',
      cold: 'freezing',
      old: 'ancient'
    };

    const antonyms = {
      hot: 'cold'
    };

    const expectedResult = {
      hot: ['scorching', 'cold'],
      cold: ['freezing', null],
      old: ['ancient', null]
    };

    const result = leftJoin(synonyms, antonyms);

    expect(JSON.stringify(result) === JSON.stringify(expectedResult)).toBe(true);
  });

});
