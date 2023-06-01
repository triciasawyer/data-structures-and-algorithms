'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let removedValue = null;
    if (this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek() {
    if (this.top !== null) {
      return this.top.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    //move back pointer to new node
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      // if only one node in the queue, need to make back null
      if (this.front === this.back) {
        this.back = null;
      }
      //if list is empty or populated, will either be null or next in line
      this.front = this.front.next
    }
    return removedValue;
  }

  peek() {
    if (this.front !== null) {
      return this.front.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return (this.front === null);
  }

}


class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1 === 0) {
      return null;
    }
    return this.stack1.pop();
  }


}


class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dog = [];
    this.cat = [];
    // this.timestamp = 0;
  }

  enqueue(animal) {
    // animal.timestamp = this.timestamp;
    // this.timestamp++;

    if (animal.species === 'dog') {
      this.dog.push(animal);
    } else if (animal.species === 'cat') {
      this.cat.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dog.shift() || null;
    } else if (pref === 'cat') {
      return this.cat.shift() || null;
    } else {
      if (this.dog.length === 0 && this.cat.length === 0) {
        return null;
      }

      // if (this.dog.length === 0) {
      //   return this.cat.shift();
      // }

      // if (this.cat.length === 0) {
      //   return this.dog.shift();
      // }

      // const oldestDog = this.dog[0];
      // const oldestCat = this.cat[0];

      // if (oldestDog.timestamp < oldestCat.timestamp) {
      //   return this.dog.shift();
      // } else {
      //   return this.cat.shift();
      // }
    }
  }
}


function validateBrackets(str) {
  const stack = [];
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const openBracket = openBrackets[closeBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== openBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}



module.exports = { Stack, Queue, PseudoQueue, Animal, AnimalShelter, validateBrackets };
