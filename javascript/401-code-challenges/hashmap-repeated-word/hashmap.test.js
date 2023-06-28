'use strict';

const { repeatedWord } = require('./index');


describe('Hashmap repeated word', () => {
  test('Can sort movies by most recent year first', () => {
    const input1 = "Once upon a time, there was a brave princess who...";
    const output1 = repeatedWord(input1);

    expect(output1).toEqual('a');
  });


  test('Can sort movies by most recent year first', () => {
    let input2 = "It was the best of times, it was the worst of times, it was the age of wisdom...";
    let output2 = repeatedWord(input2);

    expect(output2).toEqual('it');
  });


  test('Can sort movies by most recent year first', () => {
    let input3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
    let output3 = repeatedWord(input3);

    expect(output3).toEqual('summer');
  });

});

