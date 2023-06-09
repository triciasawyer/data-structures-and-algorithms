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

  // Pre-order traversal: Root -> Left -> Right
  preOrder() {
    const result = [];
    this.preOrderHelper(this.root, result);
    return result;
  }

  preOrderHelper(node, result) {
    if (node === null) return;
    result.push(node.value);
    this.preOrderHelper(node.left, result);
    this.preOrderHelper(node.right, result);
  }

  // In-order traversal: Left -> Root -> Right
  inOrder() {
    const result = [];
    this.inOrderHelper(this.root, result);
    return result;
  }

  inOrderHelper(node, result) {
    if (node === null) return;
    this.inOrderHelper(node.left, result);
    result.push(node.value);
    this.inOrderHelper(node.right, result);
  }

  postOrder() {
    const result = [];
    this.postOrderHelper(this.root, result);
    return result;
  }

  postOrderHelper(node, result) {
    if (node === null) return;
    this.postOrderHelper(node.left, result);
    this.postOrderHelper(node.right, result);
    result.push(node.value);
  }


  // code challenge 16
  findMaxValue() {
    if (this.root === null) {
      return null;
    }

    return this.findMaxValueHelper(this.root);
  }

  findMaxValueHelper(node) {
    if (node === null) {
      return Number.NEGATIVE_INFINITY;
    }

    const leftMax = this.findMaxValueHelper(node.left);
    const rightMax = this.findMaxValueHelper(node.right);

    return Math.max(node.value, leftMax, rightMax);
  }


}


class BinarySearchTree extends BinaryTree {
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.addNode(this.root, value);
    }
  }

  addNode(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.addNode(node.left, value);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.addNode(node.right, value);
      }
    }
  }

  contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (node === null) {
      return false;
    } else if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }

}



module.exports = { BinaryTree, BinarySearchTree, Node };
