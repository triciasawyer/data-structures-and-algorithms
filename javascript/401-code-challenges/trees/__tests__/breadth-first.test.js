'use strict';


const { breadthFirst } = require('../breadth-first-tree/index');


describe('Breadth first', () => {
  test('If the tree is empty', () => {
    const tree = null;
    expect(breadthFirst(tree)).toEqual([]);
  });


  test('Single node in tree', () => {
    const tree = { value: 1 };
    expect(breadthFirst(tree)).toEqual([1]);
  });


  test('Complete binary tree', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
      },
      right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 },
      },
    };

    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });


  test('A right skewed binary tree', () => {
    const tree = {
      value: 1,
      right: {
        value: 2,
        right: {
          value: 3,
          right: {
            value: 4,
            right: { value: 5 },
          },
        },
      },
    };

    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5]);
  });


});
