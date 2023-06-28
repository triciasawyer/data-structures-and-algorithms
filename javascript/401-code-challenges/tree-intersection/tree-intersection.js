'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function traverseTree(node, valuesSet) {
  if (node === null) {
    return;
  }
  valuesSet.add(node.value);
  traverseTree(node.left, valuesSet);
  traverseTree(node.right, valuesSet);
}

function treeIntersection(tree1, tree2) {
  const valuesSet = new Set();
  const resultSet = new Set();

  // Traversing the first tree and store values in the set
  traverseTree(tree1.root, valuesSet);

  // Traversing the second tree and check if values exist in the set
  function checkTree(node) {
    if (node === null) {
      return;
    }
    if (valuesSet.has(node.value)) {
      resultSet.add(node.value);
    }
    checkTree(node.left);
    checkTree(node.right);
  }

  checkTree(tree2.root);

  return resultSet;
}

module.exports = { traverseTree, treeIntersection, BinaryTree, Node }
