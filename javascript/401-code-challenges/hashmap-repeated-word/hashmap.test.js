'use strict';

const { repeatedWord } = require('./index');


describe('Hashmap repeated word', () => {
  test('Return null when there are no repeated words in the input string', () => {
    const input3 = "It was just like a fairytale...";
    const output3 = repeatedWord(input3);

    expect(output3).toBeNull();
  });


  test('Correctly identifies the first repeated word in the input string', () => {
    const input1 = "Once upon a time, there was a brave princess who...";
    const output1 = repeatedWord(input1);

    expect(output1).toEqual('a');
  });


  test('Correctly identifies the first repeated word in a longer input string, with multiple repeated words', () => {
    let input2 = "It was the best of times, it was the worst of times, it was the age of wisdom...";
    let output2 = repeatedWord(input2);

    expect(output2).toEqual('it');
  });


});

