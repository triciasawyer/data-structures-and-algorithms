'use strict';

const { mergeSort, merge } = require('../merge/index');


describe('Merge Sort', () => {
  test('Sorting an empty list', () => {
    const array = []
    mergeSort(array)

    expect(array).toEqual([]);
  });


  test('Sorting a list with a single element', () => {
    const array = [5]
    mergeSort(array)

    expect(array).toEqual([5]);
  });


  test('Sorting a list with multiple elements', () => {
    const array = [1, 3, 5, 7, 9, 11]
    mergeSort(array)

    expect(array).toEqual([1, 3, 5, 7, 9, 11]);
  });


  test('Sorting a list with duplicate elements', () => {
    const array = [1, 3, 5, 7, 9, 7]
    mergeSort(array)
    
    expect(array).toEqual([1, 3, 5, 7, 7, 9]);
  });


});
