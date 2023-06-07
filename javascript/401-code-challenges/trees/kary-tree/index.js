'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}


class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  add(value, parentValue) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const parentNode = this.searchNode(this.root, parentValue);
      if (parentNode) {
        if (parentNode.children.length < this.k) {
          parentNode.children.push(newNode);
        } else {
          console.log(`Parent node with value ${parentValue} has reached its maximum children.`);
        }
      } else {
        console.log(`Parent node with value ${parentValue} not found.`);
      }
    }
  }

  contains(value) {
    return this.searchValue(this.root, value);
  }
  searchNode(node, value) {
    if (!node) {
      return null;
    }

    if (node.value === value) {
      return node;
    }

    for (let child of node.children) {
      const foundNode = this.searchNode(child, value);
      if (foundNode) {
        return foundNode;
      }
    }

    return null;
  }
  searchValue(node, value) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    for (let child of node.children) {
      if (this.searchValue(child, value)) {
        return true;
      }
    }

    return false;
  }
}


module.exports = { KaryTree };
