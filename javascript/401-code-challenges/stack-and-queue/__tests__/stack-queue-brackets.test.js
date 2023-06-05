'use strict';


const { validateBrackets } = require('../index');


describe('validateBrackets', () => {
  test('Are balanced or true', () => {
    const string = 'This is (correct)';
    let test = validateBrackets(string);

    expect(test).toBe(true);
  });


  test('Are unbalanced or false', () => {
    const string = 'This is (incorrect}';
    let test = validateBrackets(string);

    expect(test).toBe(false);
  });


  test('Includes an additional character, so they are unbalanced and false', () => {
    const string = 'This is (incorrect)}';
    let test = validateBrackets(string);

    expect(test).toBe(false);
  });


});
