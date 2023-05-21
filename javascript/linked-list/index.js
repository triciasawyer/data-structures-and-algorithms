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


//  Add new node to the end of a linked list
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
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


  // iteratively traverse linked list and do a thing
  traversal(){
    let current = this.head;

    while(current){
      console.log(current.value);
      current = current.next;
    }
  }


}

module.exports = LinkedList;
