'use strict';

const { insert, insertionSort } = require('../insertion/index');


describe('Insert sorted array', () => {
  test('If the array is empty', () => {
    const input = [];
    const expectedOutput = [];
    const result = insertionSort(input);

    expect(result).toEqual(expectedOutput);
  });


  test('Can correctly sort a given array in order', () => {
    const input = [5, 3, 8, 2, 1];
    const expectedOutput = [1, 2, 3, 5, 8];
    const result = insertionSort(input);

    expect(result).toEqual(expectedOutput);
  });


  test('Can insert a value into an array that already exists', () => {
    let array = [1, 2, 4, 5, 6];
    insert(array, 3);

    expect(array).toEqual([1, 2, 3, 4, 5, 6]);
  });


});


