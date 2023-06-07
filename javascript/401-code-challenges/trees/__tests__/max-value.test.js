'use strict';


const { BinaryTree } = require('../index');


describe('BinaryTree findMaxValue function', () => {
  test('Binary tree is empty', () => {
    const tree = new BinaryTree();
    expect(tree.findMaxValue()).toBeNull();
  });


  test('Can successfully return the max value from a binary tree', () => {
    const tree = new BinaryTree();
    tree.root = {
      value: 4,
      left: {
        value: 2,
        left: { value: 1, left: null, right: null },
        right: { value: 3, left: null, right: null },
      },
      right: {
        value: 7,
        left: { value: 6, left: null, right: null },
        right: { value: 9, left: null, right: null },
      },
    };

    expect(tree.findMaxValue()).toEqual(9);
  });


});
