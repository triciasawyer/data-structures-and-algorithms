'use strict';

const { BinaryTree, BinarySearchTree } = require('../index');


describe('Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    const emptyTree = new BinarySearchTree();

    expect(emptyTree.root).toBeNull();
  });


  // test('Can successfully instantiate a tree with a single root node', () => {

  // });


  // test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {

  // });


  // test('Can successfully return a collection from a pre-order traversal', () => {

  // });


  // test('Can successfully return a collection from an in-order traversal', () => {

  // });


  // test('Can successfully return a collection from a post-order traversal', () => {

  // });


  // test('Returns true	false for the contains method, given an existing or non-existing node value', () => {

  // });


});



