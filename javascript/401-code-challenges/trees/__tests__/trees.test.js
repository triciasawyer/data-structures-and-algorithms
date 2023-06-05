'use strict';

const { BinarySearchTree } = require('../index');


describe('Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    const emptyTree = new BinarySearchTree();

    expect(emptyTree.root).toBeNull();
  });


  test('Can successfully instantiate a tree with a single root node', () => {
    const treeWithRoot = new BinarySearchTree();
    treeWithRoot.add(3);

    expect(treeWithRoot.root.value).toEqual(3);
  });


  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const bst = new BinarySearchTree();
    bst.add(3);
    bst.add(2);
    bst.add(6);

    expect(bst.root.value).toEqual(3);
    expect(bst.root.left.value).toEqual(2);
    expect(bst.root.right.value).toEqual(6);
  });


  test('Can successfully return a collection from a pre-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(3);
    bst.add(2);
    bst.add(6);

    expect(bst.preOrder()).toEqual([3, 2, 6]);
  });


  test('Can successfully return a collection from an in-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(3);
    bst.add(2);
    bst.add(6);

    expect(bst.inOrder()).toEqual([2, 3, 6]);
  });


  test('Can successfully return a collection from a post-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(3);
    bst.add(2);
    bst.add(6);

    expect(bst.postOrder()).toEqual([2, 6, 3]);
  });


  test('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    const bst = new BinarySearchTree();
    bst.add(3);
    bst.add(2);
    bst.add(6);

    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(8)).toBe(false);
  });


});



