'use strict';

const { BinaryTree, BinarySearchTree } = require('../index');


describe('Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    const emptyTree = new BinarySearchTree();

    expect(emptyTree.root).toBeNull();
  });


  test('Can successfully instantiate a tree with a single root node', () => {
    const treeWithRoot = new BinarySearchTree();
    treeWithRoot.add(5);

    expect(treeWithRoot.root.value).toEqual(5);
  });


  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);

    expect(bst.root.value).toEqual(5);
    expect(bst.root.left.value).toEqual(3);
    expect(bst.root.right.value).toEqual(7);
  });


  test('Can successfully return a collection from a pre-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);

    expect(bst.preOrder()).toEqual([5, 3, 7]);
  });


  // test('Can successfully return a collection from an in-order traversal', () => {

  // });


  // test('Can successfully return a collection from a post-order traversal', () => {

  // });


  // test('Returns true	false for the contains method, given an existing or non-existing node value', () => {

  // });


});



