const { join } = require('./index');


describe('Hashmap leftJoin tests', () => {
  test('if the Hashmaps are empty', () => {
    const synonyms = {};
    const antonyms = {};
    const result = join(synonyms, antonyms, 'LEFT', 'RIGHT');

    expect(result === null).toBe(true);
  });


  test('Should return the correct results of the synonyms and antonyms for both left and right join', () => {
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

    const expectedResultLeft = {
      happy: ['joyful', 'unhappy'],
      sad: ['unhappy', 'happy'],
      good: ['great', 'bad']
    };

    const expectedResultRight = {
      happy: ['joyful', 'unhappy'],
      sad: ['unhappy', 'happy'],
      good: ['great', 'bad']
    };

    const resultLeft = join(synonyms, antonyms, 'LEFT');
    const resultRight = join(synonyms, antonyms, 'RIGHT');

    expect(JSON.stringify(resultLeft) === JSON.stringify(expectedResultLeft)).toBe(true);
    expect(JSON.stringify(resultRight) === JSON.stringify(expectedResultRight)).toBe(true);
  });


  test('Should handle missing antonyms in both left and right join', () => {
    const synonyms = {
      hot: 'scorching',
      cold: 'freezing',
      old: 'ancient'
    };

    const antonyms = {
      hot: 'cold',
      old: 'new'
    };

    const expectedResultLeft = {
      hot: ['scorching', 'cold'],
      cold: ['freezing', null],
      old: ['ancient', 'new']
    };

    const expectedResultRight = {
      hot: ['scorching', 'cold'],
      cold: ['freezing', null],
      old: ['ancient', 'new']
    };

    const resultLeft = join(synonyms, antonyms, 'LEFT');
    const resultRight = join(synonyms, antonyms, 'RIGHT');

    expect(JSON.stringify(resultLeft) === JSON.stringify(expectedResultLeft)).toBe(true);
    expect(JSON.stringify(resultRight) === JSON.stringify(expectedResultRight)).toBe(true);
  });


});
