'use strict';


const { BinaryTree, Node } = require('../index');


describe('BinaryTree findMaxValue function', () => {
  test('Can successfully return the max value from a binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(5);
    tree.root.right = new Node(9);
    tree.root.left.left = new Node(7);
    tree.root.left.right = new Node(3);

    expect(tree.findMaxValue()).toEqual(9);
  });


  test('Can successfully return the max value from a binary tree', () => {
    const tree = new BinaryTree();

    expect(tree.findMaxValue()).toBeNull();
  });


});
