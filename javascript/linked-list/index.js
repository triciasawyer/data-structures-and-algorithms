'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


// Add new node to the front of a linked list
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }


//  Checks if list contains the search value
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }


//  Returns string representing all values in the list
  toString() {
    let current = this.head;
    let result = current.value;
    while (current.next) {
      current = current.next;
      result += ' -> ' + current.value;
    }
    result += ' -> NULL';
    return result;
  }


  // //  Add new node to the end of a linked list
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }


// Add new node before the first node that has the value
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }


// Add new node after the first node that has the value
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

// Streth goal: delete a node with the given value
  delete(value) {
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) current.next = current.next.next;
      current = current.next;
    }
  }


  kthFromEnd(k) {
    if (k < 1) {
      return 'Exception';
    }
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return 'Exception';
      }
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }

}


module.exports = LinkedList;
